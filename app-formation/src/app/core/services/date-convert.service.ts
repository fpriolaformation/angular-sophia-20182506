import { Injectable } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateConvertService {

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  public dateToISO(date: any): string {
    return (new Date(this.ngbDateParserFormatter.format(date))).toISOString();
  }
}
