import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex133DetailComponent } from './ex133-detail.component';

describe('Ex133DetailComponent', () => {
  let component: Ex133DetailComponent;
  let fixture: ComponentFixture<Ex133DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex133DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex133DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
