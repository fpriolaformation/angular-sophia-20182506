import { Directive, OnChanges, Input, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') className: string;

  constructor() {

  }

  ngOnChanges(): void {
    this.className = this.formatClass(this.appState);
  }

  private formatClass(state: State): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f|\s]/g, "").toLocaleLowerCase()}`;
  }
}
