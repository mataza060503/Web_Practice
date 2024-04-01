import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex100Component } from './ex100.component';

describe('Ex100Component', () => {
  let component: Ex100Component;
  let fixture: ComponentFixture<Ex100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex100Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
