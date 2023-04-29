FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-package-lock
COPY . .
RUN npm run build --production

FROM nginx
COPY --from=build /app/build /var/www/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
