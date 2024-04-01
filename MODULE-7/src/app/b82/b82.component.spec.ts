import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B82Component } from './b82.component';

describe('B82Component', () => {
  let component: B82Component;
  let fixture: ComponentFixture<B82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B82Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
