import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, OnDestroy {

  public collection: Observable<Item[]>;
  //private sub: Subscription;
  //public collection: Item[];
  constructor(private collectionService: CollectionService) {

  }

  ngOnInit() {
    this.collection = this.collectionService.collection;
    /*this.sub = this.collectionService.collection.subscribe((data) => {
      this.collection = data;
    });*/
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
