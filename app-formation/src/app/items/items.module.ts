import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './components/add/add.component';

@NgModule({
  exports : [
    ListItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent,
    AddComponent
  ]
})
export class ItemsModule {

}
