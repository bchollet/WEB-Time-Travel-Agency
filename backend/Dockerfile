FROM node:18

WORKDIR /app/backend

COPY ./package*.json ./
COPY ./src ./
COPY ./tsconfig.json ./
RUN npm install
RUN npx tsc

CMD ["node", "dist/app.js"]