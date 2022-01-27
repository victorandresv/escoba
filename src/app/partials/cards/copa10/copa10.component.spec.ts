import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa10Component } from './copa10.component';

describe('Copa10Component', () => {
  let component: Copa10Component;
  let fixture: ComponentFixture<Copa10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
