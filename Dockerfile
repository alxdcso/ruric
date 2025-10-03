FROM node:20-alpine AS build
WORKDIR /app

RUN apk add --no-cache python3 make g++ libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG REACT_APP_STAGE=production
ENV REACT_APP_STAGE=${REACT_APP_STAGE}

RUN npm run build

FROM nginx:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]