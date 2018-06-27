import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { State } from 'src/app/shared/enums/state.enum';
import { Item } from 'src/app/shared/interfaces/item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.scss']
})
export class FormReactComponent implements OnInit {

  public intitules = Object.values(State);
  public form: FormGroup;

  @Output() nItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public process(): void {
    this.form.get('birthdate').setValue(new Date(this.ngbDateParserFormatter.format(this.form.get('birthdate').value)));
    this.nItem.emit(this.form.value);
    this.form.reset(); // facultatif car redirection
    this.form.get('state').setValue(State.ALIVRER);
  }

  private createForm() {
    this.form = this.fb.group({
      name: ['',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: ['',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER,
      birthdate: [new Date(),
        Validators.compose([Validators.required]) // , Validators.pattern(/[0-9]{4}\-[0-9]{2}\-[0-9]{2}/)
      ]
    });
  }
}
