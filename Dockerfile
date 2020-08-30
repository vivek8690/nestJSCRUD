FROM node:latest

# set working directory
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
ADD package.json /usr/src/app/package.json

RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "run", "start:dev"]
