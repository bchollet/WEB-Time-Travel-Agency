FROM node:18 as builder

WORKDIR /app/frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/frontend/dist/time-travel-agency /usr/share/nginx/html

EXPOSE 80