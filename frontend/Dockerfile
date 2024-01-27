FROM node:18 as builder

WORKDIR /app/frontend

COPY ./time-travel-agency/package*.json ./
RUN npm install

COPY ./time-travel-agency .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/frontend/dist/time-travel-agency /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
