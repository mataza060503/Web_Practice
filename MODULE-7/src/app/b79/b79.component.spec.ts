import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B79Component } from './b79.component';

describe('B79Component', () => {
  let component: B79Component;
  let fixture: ComponentFixture<B79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B79Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
