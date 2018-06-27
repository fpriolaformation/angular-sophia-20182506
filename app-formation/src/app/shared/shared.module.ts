import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemsModule } from '../items/items.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StateDirective } from './directives/state.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { RefPipe } from './pipes/ref.pipe';
import { RouterModule } from '@angular/router';
import { NavCollapseDirective } from './directives/nav-collapse.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    StateDirective,
    FilterPipe,
    RefPipe,
    NavCollapseDirective
  ],
  declarations: [
    NavComponent,
    StateDirective,
    FilterPipe,
    RefPipe,
    NavCollapseDirective
  ]
})
export class SharedModule { }
