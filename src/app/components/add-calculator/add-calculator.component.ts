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
      number1: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      number2: ['', Validators.required],
     
    });
  }

  ngOnInit(): void {}

  respuesta()  {
    let v1 = this.calculadoraForm.value.number1;
    let v2 = this.calculadoraForm.value.number2;
    let result  = this.suma(v1, v2);    
    this.result =  `${result}`;
  }

   suma(val1: number, val2: number) {    
    return val1 + val2;
  }
}
