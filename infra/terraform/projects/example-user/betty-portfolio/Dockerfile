FROM node:latest

COPY . /app
COPY ./package.json /app

WORKDIR /app


RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]