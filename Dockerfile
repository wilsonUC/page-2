# --- Etapa 1: Compilación de la aplicación ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias y compilar
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Etapa 2: Servir con Nginx optimizado para SPA ---
FROM nginx:alpine

# Copiar los archivos compilados a la carpeta pública de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx con try_files
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
