import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter( item => item.name.toLowerCase().indexOf(args) !== -1 );
  }

}
