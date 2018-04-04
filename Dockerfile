# Pull base image from stock node image.
FROM mhart/alpine-node:9

# Maintainer
MAINTAINER Joseph Finlayson <joseph.finlayson@gmail.com>

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD . /opt/app


# Expose the node.js port to the Docker host.
EXPOSE 80

# Start the app
CMD [ "npm", "run", "start" ]