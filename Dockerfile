FROM node:18-alpine3.17 as builder

RUN apk update --no-cache && apk add --no-cache python3 g++ make zlib-dev
RUN npm install -g npm@9.3

WORKDIR /app

COPY package*.json ./
RUN npm install

ARG VITE_QUANTU_API_URL=https://api.quantu.app
ENV VITE_QUANTU_API_URL=$VITE_QUANTU_API_URL

RUN echo "VITE_QUANTU_API_URL=$VITE_QUANTU_API_URL" >> .env

COPY . .

RUN NODE_ENV=production npm run build

FROM nginx:1-alpine-slim

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80