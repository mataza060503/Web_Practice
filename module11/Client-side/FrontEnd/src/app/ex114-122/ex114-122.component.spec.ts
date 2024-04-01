import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex114122Component } from './ex114-122.component';

describe('Ex114122Component', () => {
  let component: Ex114122Component;
  let fixture: ComponentFixture<Ex114122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex114122Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex114122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
