import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item.model';
import { ItemHttp } from '../../../shared/interfaces/item-http.model';
import { CollectionHttpService } from '../../../core/services/collection-http.service';

@Component({
  selector: 'app-item-http',
  templateUrl: './item-http.component.html',
  styleUrls: ['./item-http.component.scss']
})
export class ItemHttpComponent {

  @Input() item: ItemHttp;
  public state = State;

  constructor(
    private collectionHttpService: CollectionHttpService
  ) { }

  public changeState(state: State): void {
    this.item.state = state;
    this.collectionHttpService.update(this.item, state).subscribe((data) => {
    },
    (error) =>  {
      alert('error');
    }
    //,(complete) => {}
    )
  }

  public delete():void {
    this.collectionHttpService.delete(this.item);
  }

}
