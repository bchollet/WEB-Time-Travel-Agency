import { Client, fakeClient } from './client';
import { Guide, fakeGuide } from './guide';
import { HistoricalPeriod, fakeHistoricalPeriod } from './historicalPeriod';
import { LifeInsurance, fakeLifeInsurance } from './lifeInsurance';

export interface Info {
  guides: Guide[];
  clients: Client[];
  historicalPeriods: HistoricalPeriod[];
  lifeInsurances: LifeInsurance[];
}

export function fakeInfo(): Info {
  return {
    guides: [fakeGuide()],
    clients: [fakeClient()],
    historicalPeriods: [fakeHistoricalPeriod()],
    lifeInsurances: [fakeLifeInsurance()],
  };
}
