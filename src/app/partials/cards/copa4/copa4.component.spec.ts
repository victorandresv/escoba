import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa4Component } from './copa4.component';

describe('Copa4Component', () => {
  let component: Copa4Component;
  let fixture: ComponentFixture<Copa4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
