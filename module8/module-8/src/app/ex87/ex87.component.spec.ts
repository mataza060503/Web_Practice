import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex87Component } from './ex87.component';

describe('Ex87Component', () => {
  let component: Ex87Component;
  let fixture: ComponentFixture<Ex87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex87Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
