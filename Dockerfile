FROM node:12-alpine
WORKDIR /app

RUN apk update && apk add --no-cache git

COPY index.js package*.json /app/
RUN npm install

CMD node /app/index.js
