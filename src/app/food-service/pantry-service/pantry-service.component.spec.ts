import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryServiceComponent } from './pantry-service.component';

describe('PantryServiceComponent', () => {
  let component: PantryServiceComponent;
  let fixture: ComponentFixture<PantryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantryServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
