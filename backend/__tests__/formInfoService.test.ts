import { findAllClients } from '../src/dataServices/clientDataService';
import { findAllGuides } from '../src/dataServices/guideDataService';
import { findAllHistoricalPeriods } from '../src/dataServices/historicalPeriodDataService';
import { findAllLifeInsurances } from '../src/dataServices/lifeInsuranceDataService';
import { DangerLevel, HistoricalPeriod, HistoricalPeriodDAO, toDangerLevel } from '../src/models/historicalPeriod';
import { getFormInfo } from '../src/services/formInfoService';
import { FormInfo } from '../src/models/formInfo';
import { LifeInsurance, LifeInsuranceDAO } from '../src/models/lifeInsurance';
import { Client } from '../src/models/client';
import { Guide } from '../src/models/guide';

jest.mock('../src/dataServices/clientDataService');
jest.mock('../src/dataServices/guideDataService');
jest.mock('../src/dataServices/historicalPeriodDataService');
jest.mock('../src/dataServices/lifeInsuranceDataService');
jest.mock('../src/models/historicalPeriod');

describe('FormInfo Service', () => {
  const mockClient: Client = {
    id: 1,
    firstname: 'firstname',
    lastname: 'lastname',
  };
  const mockGuide: Guide = {
    id: 1,
    surname: 'surname',
    biography: 'biography',
  };
  const mockHistoricalPeriod: HistoricalPeriodDAO = {
    id: 1,
    name: 'Period',
    description: 'description',
    danger_level: 'dangerous',
    arrival_date: new Date('2021-01-01'),
    location_id: 1,
    city: 'city',
    country: 'country',
  };
  const mockLifeInsurance: LifeInsuranceDAO = {
    id: 1,
    title: 'Insurance',
    price: 100,
    description: 'description',
    corporal_integrity: true,
    rescue_team: true,
    way_back_ensured: true,
    actions_persistence: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return form information', async () => {
    (findAllClients as jest.Mock).mockResolvedValue([mockClient]);
    (findAllGuides as jest.Mock).mockResolvedValue([mockGuide]);
    (findAllHistoricalPeriods as jest.Mock).mockResolvedValue([mockHistoricalPeriod]);
    (findAllLifeInsurances as jest.Mock).mockResolvedValue([mockLifeInsurance]);

    (toDangerLevel as jest.Mock).mockReturnValue(DangerLevel.Dangerous);

    const result = await getFormInfo();

    const expectedFormInfo: FormInfo = {
      clients: [mockClient],
      guides: [mockGuide],
      historicalPeriods: [
        {
          id: mockHistoricalPeriod.id,
          name: mockHistoricalPeriod.name,
          description: mockHistoricalPeriod.description,
          dangerLevel: DangerLevel.Dangerous,
          arrivalDate: mockHistoricalPeriod.arrival_date,
          location: {
            id: mockHistoricalPeriod.location_id,
            city: mockHistoricalPeriod.city,
            country: mockHistoricalPeriod.country,
          },
        } as HistoricalPeriod,
      ],
      lifeInsurances: [
        {
          id: mockLifeInsurance.id,
          title: mockLifeInsurance.title,
          price: mockLifeInsurance.price,
          description: mockLifeInsurance.description,
          corporalIntegrity: mockLifeInsurance.corporal_integrity,
          rescueTeam: mockLifeInsurance.rescue_team,
          wayBackEnsured: mockLifeInsurance.way_back_ensured,
          actionsPersistence: mockLifeInsurance.actions_persistence,
        } as LifeInsurance,
      ],
    };

    expect(result).toEqual(expectedFormInfo);
  });
});
