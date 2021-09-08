import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubServiciosComponent } from './sub-servicios.component';

describe('SubServiciosComponent', () => {
  let component: SubServiciosComponent;
  let fixture: ComponentFixture<SubServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
