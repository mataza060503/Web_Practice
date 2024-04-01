import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex99Component } from './ex99.component';

describe('Ex99Component', () => {
  let component: Ex99Component;
  let fixture: ComponentFixture<Ex99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex99Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
