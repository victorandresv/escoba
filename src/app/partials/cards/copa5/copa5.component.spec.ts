import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copa5Component } from './copa5.component';

describe('Copa5Component', () => {
  let component: Copa5Component;
  let fixture: ComponentFixture<Copa5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copa5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Copa5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
