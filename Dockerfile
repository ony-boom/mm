FROM node:18-alpine

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm build

ENV PORT=8573

EXPOSE 8573

CMD [ "pnpm", "start" ]