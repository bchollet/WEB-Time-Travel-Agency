import { Client } from './client';
import { Guide } from './guide';
import { HistoricalPeriod  } from './historicalPeriod';
import { LifeInsurance } from './lifeInsurance';

export interface Journey {
  id: number;
  startDate: Date;
  endDate: Date;
  historicalPeriod: HistoricalPeriod;
  client: Client;
  lifeInsurance: LifeInsurance;
  guide: Guide;
}
