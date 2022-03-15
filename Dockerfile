FROM node:12-stretch AS build
WORKDIR /app
COPY . .
RUN yarn install --immutable --immutable-cache && yarn build


FROM nginx:1.17
COPY --from=build /app/dist /usr/share/nginx/html
