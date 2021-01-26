FROM node:15-alpine as builder

LABEL maintainer="Leonardo Pliskieviski <leonardopliski@gmail.com>"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm i --legacy-peer-deps

COPY . .

RUN npm run test

RUN npm run build

FROM nginx:1.18.0-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
