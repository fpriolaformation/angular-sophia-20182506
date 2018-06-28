import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/item.model';
import { CollectionService } from 'src/app/core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-react',
  templateUrl: './add-react.component.html',
  styleUrls: ['./add-react.component.css']
})
export class AddReactComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  public add(item: Item): void {
    this.collectionService.add(item);
    this.router.navigate(['items/list']);
  }
}
