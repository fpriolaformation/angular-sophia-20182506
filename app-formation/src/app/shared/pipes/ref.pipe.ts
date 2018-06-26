import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform(value: any, state: string): any {
    return state ? this.getRefCode(state) + '-' + value : value;
  }

  private getRefCode(state: string) {
    return state.replace(/ /g, "").toUpperCase().substring(0,2);
  }

}
