export interface HistoricalPeriod {
  id: number;
  name: string;
  description: string;
  dangerLevel: DangerLevel;
  arrivalDate: Date;
  location: Location;
}

export interface Location {
  id: number;
  city: string;
  country: string;
}

export enum DangerLevel {
  Chill,
  Safe,
  Dangerous,
  Hell,
}