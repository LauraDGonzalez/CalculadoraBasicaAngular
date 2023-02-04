import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplytCalculatorComponent } from './multiplyt-calculator.component';

describe('MultiplytCalculatorComponent', () => {
  let component: MultiplytCalculatorComponent;
  let fixture: ComponentFixture<MultiplytCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplytCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplytCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
