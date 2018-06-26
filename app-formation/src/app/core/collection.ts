import { Item } from "../shared/interfaces/item.model";
import { State } from "../shared/enums/state.enum";

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Sylvain',
    reference: '1234',
    state: State.ALIVRER,
    birthdate: new Date(1998, 3, 15)
  },
  {
    id: 'b1',
    name: 'Franck',
    reference: '4321',
    state: State.ENCOURS,
    birthdate: new Date(2005, 3, 15)
  },
  {
    id: 'c1',
    name: 'Stéphanie',
    reference: '8855',
    state: State.LIVREE,
    birthdate: new Date(2012, 3, 15)
  }
];
