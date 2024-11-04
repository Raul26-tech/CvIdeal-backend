FROM node:20-alpine

WORKDIR /src

COPY package.json ./

RUN yarn 

COPY . .

CMD [ "yarn", "dev" ]