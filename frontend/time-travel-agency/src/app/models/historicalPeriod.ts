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

// TODO remove me
export function fakeHistoricalPeriod(): HistoricalPeriod {
  const historicalPeriod: HistoricalPeriod = {
    id: 0,
    name: 'Cold war',
    description:
      'period of geopolitical tension between the United States and the Soviet Union',
    dangerLevel: DangerLevel.Dangerous,
    arrivalDate: new Date('1947-03-12'),
    location: {
      id: 0,
      city: 'Berlin',
      country: 'Germany',
    },
  };
  return historicalPeriod;
}
