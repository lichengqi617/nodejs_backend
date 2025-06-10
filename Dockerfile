FROM node:22

WORKDIR /app

COPY . .
RUN npm ci

ENV MONGO_URI=mongodb://host.docker.internal

CMD ["npm", "start"]
