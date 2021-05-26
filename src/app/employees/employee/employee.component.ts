// import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    // private toastr : ToastrService
    ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.resetForm();
  }

  // tslint:disable-next-line: typedef
  resetForm(form?: NgForm){
    if (form != null) {
    form.resetForm();
    }
    this.service.formData = {
      EmployeeID: null,
      Fullname: '',
      Position: '',
      EmpCode: '',
      Mobile: '',
    };
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm){
    if (form.value.EmployeeID == null) {
  this.insertRecord(form);
    }
  else {
  this.updateRecord(form);
    }
  }

  // tslint:disable-next-line: typedef
  insertRecord(form: NgForm){
  this.service.postEmployee(form.value).subscribe(res => {
    // this.toastr.success('Insertado Correctamente.','EMP. Register');
    this.resetForm(form);
    this.service.refreshList();
  });
  }

  // tslint:disable-next-line: typedef
  updateRecord(form: NgForm){
    this.service.putEmployee(form.value)
    .subscribe(res => {
      // this.toastr.success('Insertado Correctamente.','EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}

