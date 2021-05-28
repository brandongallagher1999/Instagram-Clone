FROM node:latest

COPY . .

#Install TypeScript globally
RUN npm install typescript -g

#Install all npm packages
RUN npm install

RUN tsc

WORKDIR /dist/

EXPOSE 3001

ENTRYPOINT ["node", "index.js"]
