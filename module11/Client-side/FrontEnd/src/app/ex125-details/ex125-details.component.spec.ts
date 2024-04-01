import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex125DetailsComponent } from './ex125-details.component';

describe('Ex125DetailsComponent', () => {
  let component: Ex125DetailsComponent;
  let fixture: ComponentFixture<Ex125DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex125DetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex125DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
