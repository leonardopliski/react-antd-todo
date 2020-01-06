FROM node:13.5.0-alpine

LABEL maintainer="Leonardo Pliskieviski <leonardopliski@gmail.com>"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

COPY . .

EXPOSE 3000
