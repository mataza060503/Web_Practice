import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex97Component } from './ex97.component';

describe('Ex97Component', () => {
  let component: Ex97Component;
  let fixture: ComponentFixture<Ex97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex97Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
