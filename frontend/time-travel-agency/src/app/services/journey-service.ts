// TODO: remove me when you contact the API
export interface Journey {
  id: number;
  client: string;
  guide: string;
  startDate: string;
  endDate: string;
  period: string;
  insurance: string;
}

export class JourneyService {
  // TODO: remove me when you contact the API
  DUMMY_JOURNEY_DATA: Journey[] = [
    {
      id: 0,
      client: 'Bastian',
      guide: 'Fabien Dutoit',
      startDate: '01.08.2024',
      endDate: '01.11.2024',
      period: 'TB Android',
      insurance: 'BASIC',
    },
    {
      id: 1,
      client: 'Elliot',
      guide: 'Andres Perez',
      startDate: '01.08.2024',
      endDate: '01.11.2024',
      period: 'TB Machine Learning',
      insurance: 'BASIC',
    },
  ];
}
