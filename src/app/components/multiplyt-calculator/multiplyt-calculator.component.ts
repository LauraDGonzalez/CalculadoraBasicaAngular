import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-multiplyt-calculator',
  templateUrl: './multiplyt-calculator.component.html',
  styleUrls: ['./multiplyt-calculator.component.css']
})
export class MultiplytCalculatorComponent implements OnInit {

  multiplyForm: FormGroup;
  result: string = '';
  // result:nustmber = 0;
  constructor(formBuilder: FormBuilder) {
    this.multiplyForm = formBuilder.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      number3: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  respuesta() {
    let v1 = this.multiplyForm.value.number1;
    let v2 = this.multiplyForm.value.number2;
   let result = this.multiplicacion(v1, v2);
   this.result =  `${result}`;
  }

  multiplicacion(val1: number, val2: number) {
    return val1 * val2;
  }

}
