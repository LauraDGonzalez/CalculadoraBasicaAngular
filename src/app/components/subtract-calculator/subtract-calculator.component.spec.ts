import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractCalculatorComponent } from './subtract-calculator.component';

describe('SubtractCalculatorComponent', () => {
  let component: SubtractCalculatorComponent;
  let fixture: ComponentFixture<SubtractCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
