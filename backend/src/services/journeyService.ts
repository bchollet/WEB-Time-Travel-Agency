import {db} from "../config/dbConfig";
import {HistoricalPeriod} from "../entities/historicalPeriod";

export const getAllJourneys = () => {
    const result =  db.any('SELECT * FROM journey')
        .then((data: any) => {
            console.info('DATA:', data.value);
        })
        .catch((error: any) => {
            console.warn('ERROR:', error);
        });
};

export const test = () => {
    const result =  db.any('SELECT * FROM historicalperiod hp JOIN location l ON hp.location_id = l.id')
        .then((data: any) => {
            console.info('DATA:', data);
        })
        .catch((error: any) => {
            console.warn('ERROR:', error);
        });
};

// // Récupération d'un trajet par son id
// export const getJourneyById = async (id: number) => {
//     return await db.oneOrNone('SELECT * FROM journey WHERE id = $1', [id]);
// };
//
// // Création d'un trajet
// export const createJourney = async (journey: any) => {
//     return await db.one('INSERT INTO journey (departure, arrival, departure_date, arrival_date, price, transport) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [journey.departure, journey.arrival, journey.departure_date, journey.arrival_date, journey.price, journey.transport]);
// };
//
// // Mise à jour d'un trajet
// export const updateJourney = async (id: number, journey: any) => {
//     return await db.oneOrNone('UPDATE journey SET departure = $1, arrival = $2, departure_date = $3, arrival_date = $4, price = $5, transport = $6 WHERE id = $7 RETURNING *', [journey.departure, journey.arrival, journey.departure_date, journey.arrival_date, journey.price, journey.transport, id]);
// };
//
// // Suppression d'un trajet
// export const deleteJourney = async (id: number) => {
//     return await db.oneOrNone('DELETE FROM journey WHERE id = $1 RETURNING *', [id]);
// };