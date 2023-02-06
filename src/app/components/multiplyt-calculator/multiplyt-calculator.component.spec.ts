import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplytCalculatorComponent } from './multiplyt-calculator.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MultiplytCalculatorComponent', () => {
  let component: MultiplytCalculatorComponent;
  let fixture: ComponentFixture<MultiplytCalculatorComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [MultiplytCalculatorComponent],
        providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplytCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('multiplicar dos numeros', () => {
    const res = component.multiplicacion(1,2);
    expect (res).toBe(2);
  });

  it('Metodo respuesta', () => {    
    const res = component.respuesta();
    let val1 = 1;
    let val2 = 2;    
    let resultado = component.multiplicacion(val1,val2);
    expect (resultado).toBe(2);
  });
});
