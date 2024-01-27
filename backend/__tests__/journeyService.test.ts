import { JourneyDAO } from '../src/models/journey';
import { createJourney, deleteJourney, findAllJourneys, findJourneyById } from '../src/dataServices/journeyDataService';
import { addJourney, delJourney, getAllJourneys, getJourneyById, toJourneyDTO } from '../src/services/journeyService';

jest.mock('../src/dataServices/journeyDataService');
describe('Journey Service', () => {
  const mockJourneyDAO: JourneyDAO = {
    id: 1,
    start_date: new Date(),
    end_date: new Date(),
    historical_period_id: 1,
    name: 'name',
    hp_description: 'description',
    danger_level: 'Chill',
    arrival_date: new Date(),
    location_id: 1,
    city: 'city',
    country: 'country',
    client_id: 1,
    firstname: 'firstname',
    lastname: 'lastname',
    life_insurance_id: 1,
    title: 'title',
    price: 1,
    li_description: 'description',
    corporal_integrity: true,
    rescue_team: true,
    way_back_ensured: true,
    actions_persistence: true,
    guide_id: 1,
    surname: 'firstname',
    biography: 'lastname',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllJourneys', () => {
    it('should return journeys', async () => {
      (findAllJourneys as jest.Mock).mockResolvedValue([mockJourneyDAO]);

      const result = await getAllJourneys();

      expect(result).toEqual([toJourneyDTO(mockJourneyDAO)]);
    });
  });

  describe('getJourneyById', () => {
    it('should return a journey by ID', async () => {
      (findJourneyById as jest.Mock).mockResolvedValue(mockJourneyDAO);

      const result = await getJourneyById(1);

      expect(result).toEqual(toJourneyDTO(mockJourneyDAO));
    });
  });

  describe('addJourney', () => {
    it('should add a journey', async () => {
      (createJourney as jest.Mock).mockResolvedValue(mockJourneyDAO);

      const result = await addJourney(
        {
          id: null,
          startDate: new Date(),
          endDate: new Date(),
          historicalPeriod: {
            id: 1,
            name: 'American revolutionary war',
            description: 'Great Britain recognized the independence and sovereignty of the United States',
            dangerLevel: 2,
            arrivalDate: new Date(),
            location: { id: 1, city: 'Yorktown', country: 'USA' },
          },
          client: { id: 1, firstname: 'Bastian', lastname: 'Chollet' },
          lifeInsurance: {
            id: 1,
            title: 'NONE',
            price: 0.00,
            description: 'no life insurance',
            corporalIntegrity: false,
            rescueTeam: false,
            wayBackEnsured: false,
            actionsPersistence: false,
          },
          guide: { id: 1, surname: 'Jean-François Hêche', biography: '' },
        });

      expect(result).toBeUndefined();
    });
  });

  describe('delJourney', () => {
    it('should delete a journey by ID', async () => {
      (deleteJourney as jest.Mock).mockResolvedValue(mockJourneyDAO);

      const result = await delJourney(1);

      expect(result).toBeUndefined();
    });
  });
});
