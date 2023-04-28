FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-package-lock
COPY . .
RUN npm run build --production

FROM php:7.2-apache
RUN a2enmod rewrite
COPY --from=build /app/build /var/www/html/
EXPOSE 80
