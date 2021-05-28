FROM node:latest

COPY . .

RUN npm install typescript -g

RUN tsc

WORKDIR /dist/

EXPOSE 3001

ENTRYPOINT ["node", "index.js"]
