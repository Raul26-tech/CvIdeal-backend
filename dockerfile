FROM node:20-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.12.1/wait /wait

RUN chmod +x /wait

WORKDIR /usr/src

COPY package*.json ./

RUN yarn install --silent

COPY . . 