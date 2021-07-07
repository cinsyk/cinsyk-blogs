FROM node:16.4
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /vuepress
COPY . /vuepress
WORKDIR /vuepress
RUN npm install & npm run docs:build
EXPOSE 3000