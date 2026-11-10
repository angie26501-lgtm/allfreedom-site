FROM node:22-alpine AS build
WORKDIR /build
COPY files.json assemble.cjs ./
COPY overlay ./overlay
COPY site /site
RUN node assemble.cjs
FROM nginx:alpine
COPY --from=build /site/ /usr/share/nginx/html/
COPY default.conf.template /etc/nginx/templates/default.conf.template
ENV PORT=8080
EXPOSE 8080
