import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-split-calculator',
  templateUrl: './split-calculator.component.html',
  styleUrls: ['./split-calculator.component.css']
})
export class SplitCalculatorComponent implements OnInit {

  splitForm: FormGroup;
  result: string = '';
  // result:nustmber = 0;
  constructor(formBuilder: FormBuilder) {
    this.splitForm = formBuilder.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      number3: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  respuesta(): void {
    let v1 = this.splitForm.value.number1;
    let v2 = this.splitForm.value.number2;
    this.division(v1, v2);
    let result = this.division;
    this.result =  `${result}`;
  }

  division(val1: number, val2: number)  {
    if(val2 === 0){
      return 0;
    }else{
       return val1/val2;
    }
   
  }

}
