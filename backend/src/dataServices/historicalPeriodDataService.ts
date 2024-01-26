import {db} from "../config/dbConfig";
import {HistoricalPeriodDAO} from "../models/historicalPeriod";

export async function findAllHistoricalPeriods(): Promise<HistoricalPeriodDAO[]> {
    return await db.any('SELECT * FROM historicalperiod');
}