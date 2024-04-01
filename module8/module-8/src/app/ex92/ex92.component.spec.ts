import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex92Component } from './ex92.component';

describe('Ex92Component', () => {
  let component: Ex92Component;
  let fixture: ComponentFixture<Ex92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex92Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
