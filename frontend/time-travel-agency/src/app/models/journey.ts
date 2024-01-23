import { Client, fakeClient } from './client';
import { Guide, fakeGuide } from './guide';
import { HistoricalPeriod, fakeHistoricalPeriod } from './historicalPeriod';
import { LifeInsurance, fakeLifeInsurance } from './lifeInsurance';

export interface Journey {
  id: number;
  startDate: Date;
  endDate: Date;
  historicalPeriod: HistoricalPeriod;
  client: Client;
  lifeInsurance: LifeInsurance;
  guide: Guide;
}

// TODO remove me
export function fakeJourney(): Journey {
  const Journey: Journey = {
    id: 0,
    startDate: new Date('1947-03-12'),
    endDate: new Date('1991-12-25'),
    historicalPeriod: fakeHistoricalPeriod(),
    client: fakeClient(),
    lifeInsurance: fakeLifeInsurance(),
    guide: fakeGuide(),
  };
  return Journey;
}
