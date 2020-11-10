# Pull base image from stock node image.
FROM node:12.19.0-alpine3.12

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont 

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    NODE_ENV="production"

RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads /app \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

# Maintainer
LABEL MAINTAINER="Joseph Finlayson <joseph.finlayson@gmail.com>"
 
# use changes to packageon to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install --also=dev
run npm i -g foal

RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible

WORKDIR /opt/app
ADD . /opt/app

run npm run build:app

# Expose the node.js port to the Docker host.
EXPOSE 3001

# Run everything after as non-privileged user.
USER pptruser

# Start the app
CMD [ "npm", "run", "start" ]