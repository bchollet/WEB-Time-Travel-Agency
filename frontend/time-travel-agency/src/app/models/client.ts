export interface Client {
  id: number;
  firstname: string;
  lastname: string;
}

// TODO remove me
export function fakeClient(): Client {
  const client: Client = {
    id: 0,
    firstname: 'Alexis',
    lastname: 'Monthoux',
  };
  return client;
}
