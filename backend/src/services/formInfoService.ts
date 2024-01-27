import { FormInfo } from '../models/formInfo';
import { findAllClients } from '../dataServices/clientDataService';
import { findAllGuides } from '../dataServices/guideDataService';
import { findAllHistoricalPeriods } from '../dataServices/historicalPeriodDataService';
import { findAllLifeInsurances } from '../dataServices/lifeInsuranceDataService';
import { HistoricalPeriod, toDangerLevel } from '../models/historicalPeriod';
import { LifeInsurance } from '../models/lifeInsurance';

export async function getFormInfo(): Promise<FormInfo> {
  const clients = findAllClients();
  const guides = findAllGuides();
  const historicalPeriods = findAllHistoricalPeriods();
  const lifeInsurances = findAllLifeInsurances();

  return Promise.all([clients, guides, historicalPeriods, lifeInsurances]).then(
    ([clients, guides, historicalPeriods, lifeInsurances]): FormInfo => {
      return {
        clients,
        guides,
        historicalPeriods: historicalPeriods.map((dao): HistoricalPeriod => {
          return {
            id: dao.id,
            name: dao.name,
            description: dao.description,
            dangerLevel: toDangerLevel(dao.danger_level),
            arrivalDate: dao.arrival_date,
            location: {
              id: dao.location_id,
              city: dao.city,
              country: dao.country,
            },
          };
        }),
        lifeInsurances: lifeInsurances.map((dao): LifeInsurance => {
          return {
            id: dao.id,
            title: dao.title,
            price: dao.price,
            description: dao.description,
            corporalIntegrity: dao.corporal_integrity,
            rescueTeam: dao.rescue_team,
            wayBackEnsured: dao.way_back_ensured,
            actionsPersistence: dao.actions_persistence,
          };
        }),
      };
    }
  );
}
