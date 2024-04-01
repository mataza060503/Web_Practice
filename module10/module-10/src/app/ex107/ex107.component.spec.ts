import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex107Component } from './ex107.component';

describe('Ex107Component', () => {
  let component: Ex107Component;
  let fixture: ComponentFixture<Ex107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex107Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
