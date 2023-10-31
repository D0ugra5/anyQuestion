import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeBoxComponent } from './alternative-box.component';

describe('AlternativeBoxComponent', () => {
  let component: AlternativeBoxComponent;
  let fixture: ComponentFixture<AlternativeBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlternativeBoxComponent]
    });
    fixture = TestBed.createComponent(AlternativeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
