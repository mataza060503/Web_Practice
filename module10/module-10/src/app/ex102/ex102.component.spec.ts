import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex102Component } from './ex102.component';

describe('Ex102Component', () => {
  let component: Ex102Component;
  let fixture: ComponentFixture<Ex102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex102Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
