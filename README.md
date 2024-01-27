# Time Travel Agency

![homepage](assets/homepage.png)

This state-of-the-art web interface empowers administrators to meticulously plan and coordinate voyages for valued clients through time and space.

## Key Features

### Administrator Dashboard

![planning](assets/planning.png)

A comprehensive dashboard that serves as the nerve center, providing administrators with real-time insights into planned trips.

### Voyage planification

![homepage](assets/creation.png)

Customize your expeditions by handpicking experienced guides, selecting unique destinations and tailoring life insurance options for a personalized time travel journey.

#### Options availables

- **_Guide Selection_**: Carefully choose guides equipped with survival skills and expertise to ensure the safety and success of each expedition.

- **_Destination Planning_**: Select destinations wisely, considering the challenges that may arise and opportunities to relive unique historical moments.

- **_Duration Management_**: Efficiently manage the duration of each journey, optimizing the balance between exploration and safety.

- **_Life Insurance Selection_**: Customize the level of life insurance for each client, offering them peace of mind during their perilous ventures.

Time Travel Agency: Where Security Meets Survival, and Every Journey is a Vault-Tec Approved Adventure!

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
