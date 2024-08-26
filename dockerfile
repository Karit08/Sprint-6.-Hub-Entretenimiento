FROM node:20.14.0 AS dev-deps
WORKDIR /app
COPY package*.json package.json
RUN npm install


FROM node:20.14.0 AS build
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.23.3 AS prod
EXPOSE 80
COPY --from=build /app/dist/empire_movies-a/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD [ "nginx","-g","daemon off;" ]