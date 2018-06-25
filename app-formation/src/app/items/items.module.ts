import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';

@NgModule({
  exports : [
    ListItemsComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [ListItemsComponent]
})
export class ItemsModule { }
