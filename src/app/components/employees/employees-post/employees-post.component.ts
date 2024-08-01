import { Component } from '@angular/core';
import { CreateEmployeeModel } from '../../../interfaces/employee-interfaces/cr-employee';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employees-post.component.html',
  styleUrl: './employees-post.component.scss'
})
export class EmployeesPostComponent {

  constructor(private _employeeService : EmployeeService){}

  createModel : CreateEmployeeModel = {
    fullName: '',
    phoneNumber: '',
    position: '',
    salary: 0,
    givenSalary: 0,
    salaryDate: '',
    employmentDate: '',
    percent: 0,
  }

  createEmployee(){
    this._employeeService.createEmployee(this.createModel).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }
}
