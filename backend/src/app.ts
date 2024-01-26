import express from 'express';
import {findAllJourneys} from "./dataServices/journeyDataService";
import {getAllJourneys} from "./services/journeyService";

const app = express();
const port = 3000;

app.get('/journey', (req, res) => {
    getAllJourneys().then((journeys) => {
        res.send(journeys);
    });
});

app.listen(port, () => {
    getAllJourneys().then((journeys) => {
        console.debug(journeys);
        console.debug(journeys[0].historicalPeriod.location.city)
    });
    return console.log(`Express is listening at http://localhost:${port}`);
});