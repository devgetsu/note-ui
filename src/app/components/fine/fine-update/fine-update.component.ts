import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateEmployeeModel } from '../../../interfaces/employee-interfaces/up-employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fine-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fine-update.component.html',
  styleUrl: './fine-update.component.scss'
})
export class FineUpdateComponent implements OnInit{

  constructor(private _employeeService : EmployeeService,  private route: ActivatedRoute, private _router: Router){ }
  
  ngOnInit(): void {
    this.changeIdUpdate();
    this.getById(this.updateModel.id);
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

  updateFine(){
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

  changeIdUpdate() {
    this.route.paramMap.subscribe(params => {
      this.updateModel.id = params.get('id') || '';
      if (this.updateModel.id) {
        this.getById(this.updateModel.id);
      }
    });
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
        this.updateModel.fine = data.fine
        this.updateModel.description = data.description
        this.updateModel.fineDate = data.fineDate
      }
    )
  }
}
