import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractCalculatorComponent } from './subtract-calculator.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SubtractCalculatorComponent', () => {
  let component: SubtractCalculatorComponent;
  let fixture: ComponentFixture<SubtractCalculatorComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SubtractCalculatorComponent],
      providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Metodo respuesta', () => {    
    const res = component.respuesta();
    let val1 = 1;
    let val2 = 2;    
    let resultado = component.resta(val1,val2);
    expect (resultado).toBe(-1);
  });

});
