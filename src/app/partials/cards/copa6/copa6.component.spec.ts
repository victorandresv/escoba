import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa6Component } from './copa6.component';

describe('Copa6Component', () => {
  let component: Copa6Component;
  let fixture: ComponentFixture<Copa6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
