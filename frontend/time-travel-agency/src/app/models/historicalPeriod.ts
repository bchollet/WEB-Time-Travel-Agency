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

export function dangerLevelToString(level: DangerLevel): string {
  switch (level) {
    case DangerLevel.Chill:
      return 'Chill';
    case DangerLevel.Safe:
      return 'Safe';
    case DangerLevel.Dangerous:
      return 'Dangerous';
    case DangerLevel.Hell:
      return 'Hell';
    default:
      return 'Unknown Danger Level';
  }
}
