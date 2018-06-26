import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemsModule } from '../items/items.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StateDirective } from './directives/state.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { RefPipe } from './pipes/ref.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavComponent,
    StateDirective,
    FilterPipe,
    RefPipe
  ],
  declarations: [
    NavComponent,
    StateDirective,
    FilterPipe,
    RefPipe
  ]
})
export class SharedModule { }
