import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex103Component } from './ex103.component';

describe('Ex103Component', () => {
  let component: Ex103Component;
  let fixture: ComponentFixture<Ex103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex103Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
