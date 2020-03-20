FROM node:13.5.0-alpine as builder

LABEL maintainer="Leonardo Pliskieviski <leonardopliski@gmail.com>"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

COPY . ./

RUN yarn build

FROM nginx:alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
