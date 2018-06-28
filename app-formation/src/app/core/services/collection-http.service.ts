import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemHttp } from 'src/app/shared/interfaces/item-http.model';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class CollectionHttpService {

  private _collection: Observable<ItemHttp[]>;
  private url = 'api/collection';

  constructor(
    private http: HttpClient
  ) {
    this.collection = this.http.get<ItemHttp[]>(this.url);
  }

  /**
   * getter collection
   */
  public get collection(): Observable<ItemHttp[]> {
    return this._collection;
  }

  /**
   * setter collection
   */
  public set collection(col: Observable<ItemHttp[]>) {
    this._collection = col;
  }

  // add Item
  add(item: ItemHttp): Observable<ItemHttp> {
    return this.http.post<ItemHttp>(this.url, item);
  }

  // update Item
  update(item: ItemHttp, state: State): Observable<ItemHttp> {
    let copy: ItemHttp = Object.assign({}, item);
    copy.state = state;
    return this.http.put<ItemHttp>(`${this.url}/${item.id}`, copy);
  }

  // delete Item
  delete(item: ItemHttp): Observable<ItemHttp> {
    return this.http.delete<ItemHttp>(`${this.url}/${item.id}`);
  }

}
