FROM nginx
EXPOSE 3000
COPY /docs/.vuepress/dist /usr/share/nginx/html
ENTRYPOINT nginx -g "daemon off;"