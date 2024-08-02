import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateEmployeeModel } from '../../../interfaces/employee-interfaces/up-employee';
import { FormsModule } from '@angular/forms';
import { EmployeeModel } from '../../../interfaces/employee-interfaces/get-employee';

@Component({
  selector: 'app-fine-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fine-post.component.html',
  styleUrl: './fine-post.component.scss'
})
export class FinePostComponent implements OnInit{

  constructor(private _employeeService : EmployeeService, private _router: Router){ }
  
  ngOnInit(): void {
    this.getAllFines();
  }

  employees !: EmployeeModel[];

  updateModel : UpdateEmployeeModel = {
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
  }

  createFine(){
    this._employeeService.updateEmployee(this.updateModel).subscribe(
      (data)=>{
        console.log(data)
        this._router.navigate(['/fines']);
            setTimeout(() => {
            window.location.reload();
            }, 1)
      }
    )
  }
  
  getById(id:string){
    this._employeeService.getEmployeeById(id).subscribe(
      (data)=>{
        this.updateModel.fullName = data.fullName
        this.updateModel.phoneNumber = data.phoneNumber
        this.updateModel.position = data.position
        this.updateModel.salary = data.salary
        this.updateModel.givenSalary = data.givenSalary
        this.updateModel.salaryDate = data.salaryDate
        this.updateModel.employmentDate = data.employmentDate
        this.updateModel.percent = data.percent
        this.updateModel.fine += data.fine;
        this.updateModel.description
        this.updateModel.fineDate

        this.createFine();
      }
    )
  }

  getAllFines(){
    this._employeeService.getEmployee().subscribe(
      (data)=>{
        this.employees = data;
        console.log(this.employees)
      }
    )
  }
}
