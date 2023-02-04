import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitCalculatorComponent } from './split-calculator.component';

describe('SplitCalculatorComponent', () => {
  let component: SplitCalculatorComponent;
  let fixture: ComponentFixture<SplitCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
