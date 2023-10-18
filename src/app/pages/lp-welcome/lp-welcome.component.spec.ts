import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpWelcomeComponent } from './lp-welcome.component';

describe('LpWelcomeComponent', () => {
  let component: LpWelcomeComponent;
  let fixture: ComponentFixture<LpWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpWelcomeComponent]
    });
    fixture = TestBed.createComponent(LpWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
