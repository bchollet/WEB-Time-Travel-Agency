import { db } from '../config/dbConfig';
import { Client } from '../models/client';

export async function findAllClients(): Promise<Client[]> {
  return await db.any('SELECT * FROM client');
}
