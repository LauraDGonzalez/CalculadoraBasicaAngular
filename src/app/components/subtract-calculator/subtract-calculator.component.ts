import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-subtract-calculator',
  templateUrl: './subtract-calculator.component.html',
  styleUrls: ['./subtract-calculator.component.css']
})
export class SubtractCalculatorComponent implements OnInit {

  substractForm: FormGroup;
  result: string = '';
  // result:nustmber = 0;
  constructor(formBuilder: FormBuilder) {
    this.substractForm = formBuilder.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      number3: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  respuesta(): void {
    let v1 = this.substractForm.value.number1;
    let v2 = this.substractForm.value.number2;
    this.resta(v1, v2);
  }

  resta(val1: number, val2: number): void {
    this.result = ` ${val1 - val2}`;
  }

}
