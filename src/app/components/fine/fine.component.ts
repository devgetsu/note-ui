import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service/employee.service';
import { Router } from '@angular/router';
import { EmployeeModel } from '../../interfaces/employee-interfaces/get-employee';
import { DeleteEmployeeModel } from '../../interfaces/employee-interfaces/del-employee';
import { NgIf } from '@angular/common';
import { UpdateEmployeeModel } from '../../interfaces/employee-interfaces/up-employee';

@Component({
  selector: 'app-fine',
  standalone: true,
  imports: [NgIf],
  templateUrl: './fine.component.html',
  styleUrl: './fine.component.scss'
})
export class FineComponent implements OnInit{

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

  employees !: EmployeeModel[];

  deleteFine(){
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

  deleteEmployee(id:string){
    this.deleteModel.id = id;

    this._employeeService.getEmployeeById(this.deleteModel.id).subscribe(
      (data)=>{
        this.updateModel.id = data.id
        this.updateModel.fullName = data.fullName
        this.updateModel.phoneNumber = data.phoneNumber
        this.updateModel.position = data.position
        this.updateModel.salary = data.salary
        this.updateModel.givenSalary = data.givenSalary
        this.updateModel.salaryDate = data.salaryDate
        this.updateModel.employmentDate = data.employmentDate
        this.updateModel.percent = data.percent
        this.updateModel.fine = 0
        this.updateModel.description = ''
        this.updateModel.fineDate = ''

        this.deleteFine();
      }
    )
  }

  changeRoutEdit(id:string){
    this._router.navigateByUrl(`/fines-edit/${id}`)
  }

  changeRoutCreate(){
    this._router.navigateByUrl(`/fines-post`)
  }

  getAllEmployees(){
    this._employeeService.getEmployee().subscribe(
      (data)=>{
        this.employees = data;
      }
    )
  }
}
