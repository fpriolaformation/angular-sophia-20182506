import { Directive, HostListener, Input, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNavCollapse]'
})

export class NavCollapseDirective {
  @Input() appNavCollapse: Boolean;
  @Output() navCollapse: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @HostListener('click') onClick() {
    this.navCollapse.emit(!this.appNavCollapse);
  }
}
