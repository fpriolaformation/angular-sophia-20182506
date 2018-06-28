import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ListItemsHttpComponent } from './containers/list-items-http/list-items-http.component';
import { AddComponent } from './containers/add/add.component';
import { AddReactComponent } from './containers/add-react/add-react.component';
import { AddHttpComponent } from 'src/app/items/containers/add-http/add-http.component';
import { EditComponent } from 'src/app/items/containers/edit/edit.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'list-http', component: ListItemsHttpComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-http', component: AddHttpComponent },
  { path: 'add-react', component: AddReactComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})

export class ItemsRoutingModule { }
