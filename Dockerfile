FROM node:15.5.1

ENV LANG C.UTF-8
ENV WORKSPACE=/var/www/front_component/

RUN curl -sL https://deb.nodesource.com/setup_15.x | bash - 
RUN apt install -y less build-essential nodejs
RUN apt install -y vim less
RUN npm install n -g
RUN n 14.15.4

WORKDIR $WORKSPACE
