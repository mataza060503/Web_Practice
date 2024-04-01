import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B84Component } from './b84.component';

describe('B84Component', () => {
  let component: B84Component;
  let fixture: ComponentFixture<B84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B84Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
