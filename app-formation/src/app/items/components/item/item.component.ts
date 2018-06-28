import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item;
  public state = State;
  constructor(
    private collectionService: CollectionService
  ) { }

  public changeState(state: State): void {
    this.item.state = state;
    this.collectionService.update(this.item);
  }

  public delete():void {
    this.collectionService.delete(this.item);
  }

}
