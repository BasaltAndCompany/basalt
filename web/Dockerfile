# ═══ Builder: install + compile ═══
# Build context is the REPO ROOT (fly.yml passes --dockerfile web/Dockerfile):
# web imports the @basalt/ui workspace package from packages/ui.
FROM oven/bun:1.4 AS builder
WORKDIR /app

COPY package.json bun.lock* bun.lockb* ./
COPY web/package.json web/package.json
COPY dashboard/package.json dashboard/package.json
COPY packages/ui/package.json packages/ui/package.json
RUN bun install

COPY . .
WORKDIR /app/web
RUN bun run build

# ═══ Runner: just the compiled output ═══
FROM oven/bun:1.4 AS runner
WORKDIR /app

COPY --from=builder /app/web/.output ./.output

EXPOSE 3000
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

CMD ["bun", ".output/server/index.mjs"]
