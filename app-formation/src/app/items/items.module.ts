import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  exports : [
    ListItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent
  ]
})
export class ItemsModule {
  
}
