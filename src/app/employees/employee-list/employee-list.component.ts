import { Employee } from './../../shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service : EmployeeService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.service.refreshList();
    console.log(this.service.list,"lista");
    this.service.getUsers();
  }

  // tslint:disable-next-line: typedef
  populateform(emp: Employee){
    this.service.formData = Object.assign({}, emp);
    console.log(emp);
  }

  // tslint:disable-next-line: typedef
  onDelete(id :number){
    if(confirm('Estase seguro de eliminar el Usuario?')){
    this.service.deleteEmployee(id).subscribe(res => {
      this.service.refreshList();
      });
    }
  }

}
