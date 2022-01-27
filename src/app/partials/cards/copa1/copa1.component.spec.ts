import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa1Component } from './copa1.component';

describe('Copa1Component', () => {
  let component: Copa1Component;
  let fixture: ComponentFixture<Copa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
