import { db } from '../config/dbConfig';
import { JourneyDAO } from '../models/journey';

export async function findAllJourneys(): Promise<JourneyDAO[]> {
  return await db.any(`SELECT hp.description as hp_description,
                                li.description as li_description,
                                *
                         FROM journey j
                                  JOIN client c on j.client_id = c.id
                                  JOIN historicalperiod hp on j.historical_period_id = hp.id
                                  JOIN location l on hp.location_id = l.id
                                  JOIN lifeinsurance li on j.life_insurance_id = li.id
                                  JOIN guide g on j.guide_id = g.id;`);
}

export async function findJourneyById(id: number): Promise<JourneyDAO> {
  console.debug(`findJourneyById(${id})`);
  return await db.one(
    `SELECT *
                         FROM journey
                                  JOIN client c on journey.client_id = c.id
                                  JOIN historicalperiod hp on journey.historical_period_id = hp.id
                                  JOIN lifeinsurance l on journey.life_insurance_id = l.id
                                  JOIN guide g on journey.guide_id = g.id
                         WHERE journey.id = $1`,
    [id]
  );
}

export async function createJourney(journey: JourneyDAO) {
  return await db.one(
    `INSERT INTO journey (
                                              start_date,
                                              end_date,
                                              client_id,
                                              historical_period_id,
                                              life_insurance_id,
                                              guide_id)
                         VALUES ($1, $2, $3, $4, $5, $6)
                         RETURNING *`,
    [
      journey.start_date,
      journey.end_date,
      journey.client_id,
      journey.historical_period_id,
      journey.life_insurance_id,
      journey.guide_id,
    ]
  );
}

export async function deleteJourney(id: number) {
  return await db.oneOrNone('DELETE FROM journey WHERE id = $1', [id]);
}
