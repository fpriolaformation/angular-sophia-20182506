import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from 'src/app/shared/interfaces/item.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateConvertService } from 'src/app/core/services/date-convert.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public model;
  public intitules = Object.values(State);
  public birthdate: NgbDateStruct;
  public newItem: Item;

  @Output() nItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(
    private dateConvertService: DateConvertService
  ) { }

  ngOnInit() {
    this.init();
  }

  public process(): void {
    this.newItem.birthdate = this.dateConvertService.dateToISO(this.birthdate);
    this.nItem.emit(this.newItem);
    this.init();
  }

  private init(): void {
    this.newItem = {
      id: "",
      name: "",
      reference: "",
      state: State.ALIVRER,
      birthdate: ""
    };
  }
}
