import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa7Component } from './copa7.component';

describe('Copa7Component', () => {
  let component: Copa7Component;
  let fixture: ComponentFixture<Copa7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
