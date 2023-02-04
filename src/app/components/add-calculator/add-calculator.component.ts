import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-calculator',
  templateUrl: './add-calculator.component.html',
  styleUrls: ['./add-calculator.component.css'],
})
export class AddCalculatorComponent implements OnInit {
  calculadoraForm: FormGroup;
  result: string = '';
  // result:nustmber = 0;
  constructor(formBuilder: FormBuilder) {
    this.calculadoraForm = formBuilder.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      number3: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  respuesta(): void {
    let v1 = this.calculadoraForm.value.number1;
    let v2 = this.calculadoraForm.value.number2;
    this.suma(v1, v2);
  }

  suma(val1: number, val2: number): void {
    this.result = ` ${val1 + val2}`;
  }
}
