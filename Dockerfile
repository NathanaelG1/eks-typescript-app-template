# syntax=docker/dockerfile:1

#create image for app
FROM node:18-alpine as base

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

#define test image stage
FROM base as test
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "test"]

FROM base as prod
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

