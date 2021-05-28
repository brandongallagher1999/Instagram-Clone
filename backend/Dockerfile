FROM node:latest

COPY . .

#Install TypeScript globally
RUN npm install typescript -g

#Install all npm packages
RUN npm install

#Compile TypeScript files into /dist/ folder
RUN tsc

WORKDIR /dist/

EXPOSE 3001

#Run the program
ENTRYPOINT ["node", "index.js"]
