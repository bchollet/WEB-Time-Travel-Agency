import {Location, toDangerLevel} from "../models/historicalPeriod";
import {Journey, JourneyDAO} from "../models/journey";
import {findAllJourneys} from "../dataServices/journeyDataService";

export async function getAllJourneys(): Promise<Journey[]> {
    return await findAllJourneys()
        .then((journeys: JourneyDAO[]): Journey[] => {
            return journeys.map((dao: JourneyDAO): Journey => {
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
                            ...dao,
                            id: dao.location_id,
                        } as Location
                    },
                    client: {
                        ...dao,
                        id: dao.client_id,
                    },
                    lifeInsurance: {
                        ...dao,
                        id: dao.life_insurance_id,
                        description: dao.li_description,
                        corporalIntegrity: dao.corporal_integrity,
                        rescueTeam: dao.rescue_team,
                        wayBackEnsured: dao.way_back_ensured,
                        actionsPersistence: dao.actions_persistence,
                    },
                    guide: {
                        ...dao,
                        id: dao.guide_id,
                    }
                };
            });
        });
}