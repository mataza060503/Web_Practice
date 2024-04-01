import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex133Component } from './ex133.component';

describe('Ex133Component', () => {
  let component: Ex133Component;
  let fixture: ComponentFixture<Ex133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex133Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
