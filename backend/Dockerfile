FROM node:latest

COPY . .

#Install TypeScript globally
RUN npm install typescript -g

#Install all npm packages
RUN npm install

#Compile TypeScript files into /dist/ folder
RUN tsc

WORKDIR /dist/

#Setting environment variable
ENV PORT=3001

EXPOSE 3001

#Run the program
ENTRYPOINT ["node", "index.js"]
