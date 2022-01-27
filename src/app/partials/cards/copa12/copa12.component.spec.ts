import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa12Component } from './copa12.component';

describe('Copa12Component', () => {
  let component: Copa12Component;
  let fixture: ComponentFixture<Copa12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
