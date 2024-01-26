import express from 'express';
import {getAllJourneys, test} from "./services/journeyService";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    test();
    return console.log(`Express is listening at http://localhost:${port}`);
});