export interface Guide {
  id: number;
  surname: string;
  biography: string;
}

// TODO remove me
export function fakeGuide(): Guide {
  const guide = {
    id: 0,
    surname: 'Yassoun',
    biography: 'bold aventurer of the wild west',
  };
  return guide;
}
