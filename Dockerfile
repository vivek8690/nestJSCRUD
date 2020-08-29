FROM node:latest

RUN mkdir /usr/src/app

# set working directory
WORKDIR /usr/src/app

# # install dependencies
RUN npm install

## expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]
