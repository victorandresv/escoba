import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa3Component } from './copa3.component';

describe('Copa3Component', () => {
  let component: Copa3Component;
  let fixture: ComponentFixture<Copa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
