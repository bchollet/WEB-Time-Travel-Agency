export interface HistoricalPeriodDAO {
    id: number;
    name: string;
    description: string;
    danger_level: string;
    arrival_date: Date;
    location_id: number;
    city: string;
    country: string;
}


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

export function toDangerLevel(str: string): DangerLevel {
    switch (str) {
        case 'chill':
            return DangerLevel.Chill;
        case 'safe':
            return DangerLevel.Safe;
        case 'dangerous':
            return DangerLevel.Dangerous;
        case 'hell':
            return DangerLevel.Hell;
    }
}