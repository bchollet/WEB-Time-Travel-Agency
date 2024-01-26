import {Guide} from "./guide";
import {Client} from "./client";
import {HistoricalPeriod} from "./historicalPeriod";
import {LifeInsurance} from "./lifeInsurance";

export interface FormInfo {
    guides: Guide[];
    clients: Client[];
    historicalPeriods: HistoricalPeriod[];
    lifeInsurances: LifeInsurance[];
}