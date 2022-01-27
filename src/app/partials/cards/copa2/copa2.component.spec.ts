import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa2Component } from './copa2.component';

describe('Copa2Component', () => {
  let component: Copa2Component;
  let fixture: ComponentFixture<Copa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
