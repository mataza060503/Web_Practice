import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex133ManageComponent } from './ex133-manage.component';

describe('Ex133ManageComponent', () => {
  let component: Ex133ManageComponent;
  let fixture: ComponentFixture<Ex133ManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex133ManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex133ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
