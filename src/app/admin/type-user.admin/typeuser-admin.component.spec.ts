import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUserAdminComponent } from './typeuser-admin.component';

describe('TypeUser.AdminComponent', () => {
  let component: TypeUserAdminComponent;
  let fixture: ComponentFixture<TypeUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeUserAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
