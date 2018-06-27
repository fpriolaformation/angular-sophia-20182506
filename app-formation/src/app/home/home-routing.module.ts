import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from 'src/app/home/containers/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})

export class HomeRoutingModule { }
