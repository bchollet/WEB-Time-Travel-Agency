export interface LifeInsuranceDAO {
  id: number;
  title: string;
  description: string;
  price: number;
  corporal_integrity: boolean;
  rescue_team: boolean;
  way_back_ensured: boolean;
  actions_persistence: boolean;
}

export interface LifeInsurance {
  id: number;
  title: string;
  description: string;
  price: number;
  corporalIntegrity: boolean;
  rescueTeam: boolean;
  wayBackEnsured: boolean;
  actionsPersistence: boolean;
}
