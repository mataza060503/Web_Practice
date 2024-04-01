import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex101Component } from './ex101.component';

describe('Ex101Component', () => {
  let component: Ex101Component;
  let fixture: ComponentFixture<Ex101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex101Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
