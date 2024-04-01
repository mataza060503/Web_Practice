import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B83Component } from './b83.component';

describe('B83Component', () => {
  let component: B83Component;
  let fixture: ComponentFixture<B83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B83Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
