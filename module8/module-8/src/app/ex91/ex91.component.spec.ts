import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex91Component } from './ex91.component';

describe('Ex91Component', () => {
  let component: Ex91Component;
  let fixture: ComponentFixture<Ex91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex91Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
