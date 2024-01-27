import express from 'express';
import cors from 'cors';
import {
  addJourney,
  delJourney,
  getAllJourneys,
  getJourneyById, modifyJourney,
} from './services/journeyService';
import { getFormInfo } from './services/formInfoService';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get('/journey', (req, res) => {
  getAllJourneys().then(journeys => {
    res.status(200);
    if (!journeys) res.status(404);
    res.send(journeys);
  })
});

app.get('/journey/:id', (req, res) => {
  getJourneyById(parseInt(req.params.id)).then(journey => {
    res.status(200);
    if (!journey) res.status(404);
    res.send(journey);
  })
});

app.put('/journey/:id', (req, res) => {
  modifyJourney(req.body).then((journey) => {
    res.status(204);
    res.send(journey);
  });
});

app.delete('/journey/:id', (req, res) => {
  delJourney(+req.params.id).then(() => {
    res.status(204);
    res.send();
  });
});

app.post('/journey', (req, res) => {
  addJourney(req.body).then(() => {
    res.status(201);
    if (!req.body) res.status(500);
    res.send();
  });
});

app.get('/form-info', (req, res) => {
  getFormInfo().then(formInfo => {
    res.status(200);
    if (!formInfo) res.status(500);
    res.send(formInfo);
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
