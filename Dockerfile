FROM node:6
MAINTAINER Axel Monroy <xaxelmonroyx@gmail.com>

RUN apt-get install git
RUN git clone https://github.com/AxelMonroyX/workshop-docker-meetup.git /usr/src/app

WORKDIR /usr/src/app/workshop-docker-meetup

ENV DEBUG myapp:*
RUN npm install




EXPOSE 3000
CMD [ "npm", "start" ]