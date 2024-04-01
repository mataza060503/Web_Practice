import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B85Component } from './b85.component';

describe('B85Component', () => {
  let component: B85Component;
  let fixture: ComponentFixture<B85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B85Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
