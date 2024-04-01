import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex125Component } from './ex125.component';

describe('Ex125Component', () => {
  let component: Ex125Component;
  let fixture: ComponentFixture<Ex125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex125Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
