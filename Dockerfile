# =============================================================================
# Pragma Controllers — Docker para CapRover
#
# Sitio 100% estático (Next.js `output: 'export'`). Build multi-stage:
#   1) Node construye el export → carpeta out/
#   2) nginx sirve out/ como archivos estáticos
#
# NO afecta el deploy a Hostinger: allá se sube la carpeta out/ directamente.
# Este Dockerfile solo existe para servir lo MISMO en un servidor CapRover.
# =============================================================================

# ---------- Stage 1: build ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Instala dependencias con el lockfile (incluye devDeps para poder compilar).
COPY package.json package-lock.json ./
RUN npm ci

# Copia el código y genera el export estático en /app/out
COPY . .
RUN npm run build

# ---------- Stage 2: serve ----------
FROM nginx:1.27-alpine AS runner

# Config de nginx para servir el export (URLs limpias + cache de assets).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia el sitio estático generado.
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
