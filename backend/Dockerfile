FROM node:18

WORKDIR /app/backend

COPY ./backend/package*.json ./
RUN npm install
RUN npx tsc

COPY ./backend .

EXPOSE 3000
CMD ["node", "dist/app.js"]