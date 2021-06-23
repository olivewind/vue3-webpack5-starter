FROM node:14-alpine as builder

# copy
WORKDIR /app
ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
RUN yarn
ADD . /app

# lint
RUN yarn lint

# build
RUN yarn build

# ++++++++++++++++++++++++++++++++++++++++++++++++++
FROM nginx:1.19.0
RUN mkdir -p web/logs

COPY --from=builder /app/dist/ /web/dist/
ADD build/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
