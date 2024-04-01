import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex104Component } from './ex104.component';

describe('Ex104Component', () => {
  let component: Ex104Component;
  let fixture: ComponentFixture<Ex104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex104Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
