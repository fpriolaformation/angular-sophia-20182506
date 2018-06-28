import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemHttp } from '../../../shared/interfaces/item-http.model';
import { CollectionHttpService } from '../../../core/services/collection-http.service';

@Component({
  selector: 'app-list-items-http',
  templateUrl: './list-items-http.component.html',
  styleUrls: ['./list-items-http.component.css']
})
export class ListItemsHttpComponent implements OnInit, OnDestroy {

  public collection: Observable<ItemHttp[]>;
  //private sub: Subscription;
  //public collection: Item[];
  constructor(private collectionService: CollectionHttpService) {

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
