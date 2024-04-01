import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B81Component } from './b81.component';

describe('B81Component', () => {
  let component: B81Component;
  let fixture: ComponentFixture<B81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B81Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
