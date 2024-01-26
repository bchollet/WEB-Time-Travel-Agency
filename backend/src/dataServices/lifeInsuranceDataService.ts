import {db} from "../config/dbConfig";
import {LifeInsuranceDAO} from "../models/lifeInsurance";

export async function findAllLifeInsurances(): Promise<LifeInsuranceDAO[]> {
    return await db.any('SELECT * FROM lifeinsurance');
}