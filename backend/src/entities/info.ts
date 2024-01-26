import { Client } from './client';
import { Guide } from './guide';
import { HistoricalPeriod } from './historicalPeriod';
import { LifeInsurance } from './lifeInsurance';

export interface Info {
  guides: Guide[];
  clients: Client[];
  historicalPeriods: HistoricalPeriod[];
  lifeInsurances: LifeInsurance[];
}
