import { Client } from './client';
import { Guide } from './guide';
import { HistoricalPeriod } from './historicalPeriod';
import { LifeInsurance } from './lifeInsurance';

export interface JourneyDAO {
  id: number;
  start_date: Date;
  end_date: Date;
  client_id: number;
  firstname: string;
  lastname: string;
  historical_period_id: number;
  name: string;
  hp_description: string;
  danger_level: string;
  arrival_date: Date;
  location_id: number;
  city: string;
  country: string;
  life_insurance_id: number;
  title: string;
  li_description: string;
  price: number;
  corporal_integrity: boolean;
  rescue_team: boolean;
  way_back_ensured: boolean;
  actions_persistence: boolean;
  guide_id: number;
  surname: string;
  biography: string;
}

export interface Journey {
  id: number;
  startDate: Date;
  endDate: Date;
  historicalPeriod: HistoricalPeriod;
  client: Client;
  lifeInsurance: LifeInsurance;
  guide: Guide;
}
