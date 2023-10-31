import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpCorrectionComponent } from './lp-correction.component';

describe('LpCorrectionComponent', () => {
  let component: LpCorrectionComponent;
  let fixture: ComponentFixture<LpCorrectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpCorrectionComponent]
    });
    fixture = TestBed.createComponent(LpCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
