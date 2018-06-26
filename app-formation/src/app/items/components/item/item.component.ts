import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: Item;
  public state = State;
  constructor() { }

  public changeState(state: State): void {
    this.item.state = state;
    // par la suite on appelera la methode update de collectionService pour persister dans la bd
  }

}
