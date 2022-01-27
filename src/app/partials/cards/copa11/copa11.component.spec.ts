import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa11Component } from './copa11.component';

describe('Copa11Component', () => {
  let component: Copa11Component;
  let fixture: ComponentFixture<Copa11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
