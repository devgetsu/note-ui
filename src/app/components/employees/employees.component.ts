import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service/employee.service';
import { Router } from '@angular/router';
import { DeleteEmployeeModel } from '../../interfaces/employee-interfaces/del-employee';
import { EmployeeModel } from '../../interfaces/employee-interfaces/get-employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit{

  constructor(private _employeeService : EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  deleteModel : DeleteEmployeeModel = {
    id : ''
  }

  employeeModel : EmployeeModel = {
    id: '',
    fullName: '',
    phoneNumber: '',
    position: '',
    salary: 0,
    givenSalary: 0,
    salaryDate: '',
    employmentDate: '',
    percent: 0,
    fine: 0,
    description: '',
    fineDate: '',
    remainedSalary: 0,
  }

  employees !: EmployeeModel[];

  deleteEmployee(id:string){
    this.deleteModel.id = id;
    
    this._employeeService.deleteEmployee(this.deleteModel).subscribe(
      (data)=>{
        console.log(data);
        this._router.navigate(['/employees']);
            setTimeout(() => {
            window.location.reload();
            }, 1)
      }
    );
  }

  changeRoutEdit(id:string){
    this._router.navigateByUrl(`/employees-edit/${id}`)
  }

  changeRoutCreate(){
    this._router.navigateByUrl(`/employees-post`)
  }

  getAllEmployees(){
    this._employeeService.getEmployee().subscribe(
      (data)=>{
        this.employees = data;
      }
    )
  }
}
