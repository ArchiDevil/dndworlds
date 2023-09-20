# build app
FROM node:18-alpine AS build-web
WORKDIR /app
COPY web /app
RUN npm install
RUN npm run build

# build server image
FROM node:18-alpine as web
WORKDIR /app
COPY --from=build-web /app/.output /app/dist
CMD node dist/server/index.mjs
EXPOSE 3000
