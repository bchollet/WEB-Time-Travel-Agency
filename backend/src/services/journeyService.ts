import { toDangerLevel } from '../models/historicalPeriod';
import { Journey, JourneyDAO } from '../models/journey';
import {
  createJourney,
  deleteJourney,
  findAllJourneys,
  findJourneyById, updateJourney,
} from '../dataServices/journeyDataService';

export async function getAllJourneys(): Promise<Journey[]> {
  return await findAllJourneys().then((daos: JourneyDAO[]): Journey[] => {
    return daos.map((dao: JourneyDAO): Journey => toJourneyDTO(dao));
  })
    .catch((err: Error) => {
      console.error(err);
      return [];
    });
}

export async function getJourneyById(id: number): Promise<Journey> {
  return await findJourneyById(id).then((dao: JourneyDAO): Journey => {
    console.debug(`Journey with id ${dao.id} found`);
    return toJourneyDTO(dao);
  }).catch((err: Error) => {
    console.error(err);
    return null;
  });
}

export async function modifyJourney(journey: Journey): Promise<Journey> {
  return await updateJourney({
    id: journey.id,
    start_date: journey.startDate,
    end_date: journey.endDate,
    client_id: journey.client.id,
    historical_period_id: journey.historicalPeriod.id,
    life_insurance_id: journey.lifeInsurance.id,
    guide_id: journey.guide.id,
  })
    .then((dao: JourneyDAO) => {
      console.info(`Journey with id ${dao.id} updated`);
      return toJourneyDTO(dao);
    }).catch((err: Error) => {
      console.error(err);
      return null;
    });
}

export async function addJourney(journey: Journey): Promise<Journey> {
  return await createJourney(toJourneyDAO(journey)).then((dao: JourneyDAO) => {
    console.info(`Journey with id ${dao.id} created`);
    return toJourneyDTO(dao);
  }).catch((err: Error) => {
    console.error(err);
    return null
  });
}

export async function delJourney(id: number) {
  return await deleteJourney(id).then(() => {
    console.info(`Journey with id ${id} deleted`);
  }).catch((err: Error) => {
    console.error(err);
  });
}

export function toJourneyDTO(dao: JourneyDAO): Journey {
  return {
    id: dao.id,
    startDate: dao.start_date,
    endDate: dao.end_date,
    historicalPeriod: {
      id: dao.historical_period_id,
      name: dao.name,
      description: dao.hp_description,
      dangerLevel: toDangerLevel(dao.danger_level),
      arrivalDate: dao.arrival_date,
      location: {
        id: dao.location_id,
        city: dao.city,
        country: dao.country,
      },
    },
    client: {
      id: dao.client_id,
      firstname: dao.firstname,
      lastname: dao.lastname,
    },
    lifeInsurance: {
      id: dao.life_insurance_id,
      title: dao.title,
      price: dao.price,
      description: dao.li_description,
      corporalIntegrity: dao.corporal_integrity,
      rescueTeam: dao.rescue_team,
      wayBackEnsured: dao.way_back_ensured,
      actionsPersistence: dao.actions_persistence,
    },
    guide: {
      id: dao.guide_id,
      surname: dao.surname,
      biography: dao.biography,
    },
  };
}

export function toJourneyDAO(dto: Journey): JourneyDAO {
  return {
    actions_persistence: dto.lifeInsurance.actionsPersistence,
    arrival_date: dto.historicalPeriod.arrivalDate,
    biography: dto.guide.biography,
    city: dto.historicalPeriod.location.city,
    client_id: dto.client.id,
    corporal_integrity: dto.lifeInsurance.corporalIntegrity,
    country: dto.historicalPeriod.location.country,
    danger_level: dto.historicalPeriod.dangerLevel.toString(),
    end_date: dto.endDate,
    firstname: dto.client.firstname,
    guide_id: dto.guide.id,
    historical_period_id: dto.historicalPeriod.id,
    hp_description: dto.historicalPeriod.description,
    id: dto.id,
    lastname: dto.client.lastname,
    li_description: dto.lifeInsurance.description,
    life_insurance_id: dto.lifeInsurance.id,
    location_id: dto.historicalPeriod.location.id,
    name: dto.historicalPeriod.name,
    price: dto.lifeInsurance.price,
    rescue_team: dto.lifeInsurance.rescueTeam,
    start_date: dto.startDate,
    surname: dto.guide.surname,
    title: dto.lifeInsurance.title,
    way_back_ensured: dto.lifeInsurance.wayBackEnsured,
  };
}
