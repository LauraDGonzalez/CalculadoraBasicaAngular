
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AddCalculatorComponent } from './add-calculator.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddCalculatorComponent', () => {
  let component: AddCalculatorComponent;
  let fixture: ComponentFixture<AddCalculatorComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AddCalculatorComponent],
      providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('Sumar dos numeros', () => {
    const res = component.suma(1,2);
    expect (res).toBe(3);
  });

  it('Metodo respuesta', () => {    
    const res = component.respuesta();
    let val1 = 1;
    let val2 = 2;    
    let resultado = component.suma(val1,val2);
    expect (resultado).toBe(3);
  });
  
});
