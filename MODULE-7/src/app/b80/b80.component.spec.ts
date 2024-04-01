import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B80Component } from './b80.component';

describe('B80Component', () => {
  let component: B80Component;
  let fixture: ComponentFixture<B80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B80Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
