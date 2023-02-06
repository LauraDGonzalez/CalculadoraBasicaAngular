import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitCalculatorComponent } from './split-calculator.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SplitCalculatorComponent', () => {
  let component: SplitCalculatorComponent;
  let fixture: ComponentFixture<SplitCalculatorComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SplitCalculatorComponent],
      providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // esta es la prueba de comportamiento
  });

  it('dividir dos numeros', () => {
    const res = component.division(2,2);
    expect (res).toBe(1);
  });

  it('Metodo respuesta', () => {    
    const res = component.respuesta();
    let val1 = 1;
    let val2 = 2;    
    let resultado = component.division(val1,val2);
    expect (resultado).toBe(0.5);
  });

  it('División por cero', () => {    
    const res = component.division(2,0);
    expect (res).toBe(0);
  });

});
