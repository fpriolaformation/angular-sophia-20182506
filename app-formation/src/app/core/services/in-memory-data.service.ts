import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { State } from 'src/app/shared/enums/state.enum';
import { ItemHttp } from '../../shared/interfaces/item-http.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const collection: ItemHttp[] = [
      {
        id: 0,
        name: 'Sylvain',
        reference: '1234',
        state: State.ALIVRER,
        birthdate: 'Wed Jun 27 2018 02:00:00 GMT+0200'
      },
      {
        id: 1,
        name: 'Franck',
        reference: '4321',
        state: State.ENCOURS,
        birthdate: 'Wed Jun 27 2018 02:00:00 GMT+0200'
      },
      {
        id: 2,
        name: 'Stéphanie',
        reference: '8855',
        state: State.LIVREE,
        birthdate: 'Wed Jun 27 2018 02:00:00 GMT+0200'
      }
    ];
    return {collection};
  }
}
