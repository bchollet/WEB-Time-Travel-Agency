import { db } from '../config/dbConfig';
import { Location } from '../models/historicalPeriod';

export async function findAllLocations(): Promise<Location[]> {
  return await db.any('SELECT * FROM location');
}
