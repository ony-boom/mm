FROM node:18-alpine

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install

ENV PORT=3000

EXPOSE 3000

CMD [ "pnpm", "start" ]