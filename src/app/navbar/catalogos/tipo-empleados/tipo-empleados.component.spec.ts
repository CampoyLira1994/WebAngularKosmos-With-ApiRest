import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEmpleadosComponent } from './tipo-empleados.component';

describe('TipoEmpleadosComponent', () => {
  let component: TipoEmpleadosComponent;
  let fixture: ComponentFixture<TipoEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
