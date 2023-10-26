import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpQuestionComponent } from './lp-question.component';

describe('LpQuestionComponent', () => {
  let component: LpQuestionComponent;
  let fixture: ComponentFixture<LpQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpQuestionComponent]
    });
    fixture = TestBed.createComponent(LpQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
