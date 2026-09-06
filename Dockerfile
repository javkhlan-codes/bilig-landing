# syntax=docker/dockerfile:1
#
# Production image for bilig-landing (bilig.systems / www.bilig.systems).
# Built in CI (GitHub Actions), pushed to GHCR and pulled by the droplet —
# the server has 2 vCPU and never builds this itself.
#
# The landing site is entirely static content compiled into the bundle: it
# reads no environment variables and calls no backend, so the image needs no
# build-time configuration and one image runs in any environment.

# ── deps ─────────────────────────────────────────────────────────────────
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── build ────────────────────────────────────────────────────────────────
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ── runner ───────────────────────────────────────────────────────────────
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S -u 1001 -G nodejs nextjs

COPY --from=builder /app/public ./public
# `standalone` already carries the traced node_modules and a server.js entry.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
