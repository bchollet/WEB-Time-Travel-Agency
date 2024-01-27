import { db } from '../config/dbConfig';
import { Guide } from '../models/guide';

export async function findAllGuides(): Promise<Guide[]> {
  return await db.any('SELECT * FROM guide');
}
