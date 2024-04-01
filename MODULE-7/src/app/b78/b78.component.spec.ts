import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B78Component } from './b78.component';

describe('B78Component', () => {
  let component: B78Component;
  let fixture: ComponentFixture<B78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B78Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
