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

// TODO remove me
export function fakeLifeInsurance(): LifeInsurance {
  const lifeInsurance: LifeInsurance = {
    id: 0,
    title: 'NONE',
    description: 'no life insurance',
    price: 100,
    corporalIntegrity: false,
    rescueTeam: false,
    wayBackEnsured: true,
    actionsPersistence: false,
  };
  return lifeInsurance;
}
