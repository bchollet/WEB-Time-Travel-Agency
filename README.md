# Prerequisites
This application is made using Node.js and Angular. You will need npm and the ng CLI install globally to run the project in dev mode. Otherwise, you can run it one go without npm using Docker.

## Run with Docker
To run the whole application (backend, frontend, database) using docker go into the root of the project and run:

```bash
docker-compose up
```
the app should run and can be accessed through http://localhost:8000

## Run the backend
To run the backend, you first need to compile it to JavaScript using the following command **inside the backend directory**:

```bash
npx tsc
```

Run the JavaScript output with node:

```bash
node dist/app.js
```

If it runs successfully, a message will be logged to the terminal:

```
Express is listening at http://localhost:3000
```

**However, it does not run the database ! Refer to the run with docker section**

## Run the frontend
To run the frontend, go into the /frontend/time-travel-agency folder, then run

```bash
ng serve
```

The frontend is now listening at http://localhost:4200
