import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex105Component } from './ex105.component';

describe('Ex105Component', () => {
  let component: Ex105Component;
  let fixture: ComponentFixture<Ex105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex105Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
