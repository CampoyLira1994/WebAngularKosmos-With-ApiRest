import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastServiceComponent } from './breakfast-service.component';

describe('BreakfastServiceComponent', () => {
  let component: BreakfastServiceComponent;
  let fixture: ComponentFixture<BreakfastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
