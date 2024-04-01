import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex136Component } from './ex136.component';

describe('Ex136Component', () => {
  let component: Ex136Component;
  let fixture: ComponentFixture<Ex136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex136Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
