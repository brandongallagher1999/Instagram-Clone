FROM node:latest

COPY . .

#Install all NPM packages
RUN npm install

EXPOSE 3000

#Run the front-end react instance
ENTRYPOINT ["npm", "run"]