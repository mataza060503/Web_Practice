import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex106Component } from './ex106.component';

describe('Ex106Component', () => {
  let component: Ex106Component;
  let fixture: ComponentFixture<Ex106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex106Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
