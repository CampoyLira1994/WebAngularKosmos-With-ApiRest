import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodServiceComponent } from './food-service.component';

describe('FoodServiceComponent', () => {
  let component: FoodServiceComponent;
  let fixture: ComponentFixture<FoodServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
