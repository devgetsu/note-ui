import { PasswordModel } from './../../interfaces/password-interfaces/get-password';
import { ProjectModel } from './../../interfaces/project-interfaces/get-pr';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PasswordService } from '../../services/password-service/password.service';
import { DeletePasswordModel } from '../../interfaces/password-interfaces/delete-password';
import { CreatePasswordModel } from '../../interfaces/password-interfaces/cr-password';
import { UpdatePasswordModel } from '../../interfaces/password-interfaces/update-password';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passwords',
  standalone: true,
  imports: [SidebarComponent, FormsModule],
  templateUrl: './passwords.component.html',
  styleUrl: './passwords.component.scss'
})
export class PasswordsComponent implements OnInit{

  constructor(private _passwordService : PasswordService) { }

  ngOnInit(): void {
    this.getAllPasswords();
  }

  deleteModel : DeletePasswordModel = {
    id : ''
  }

  createModel : CreatePasswordModel = {
    program: '',
    login: '',
    pass: '',
    projectId: ''
  }

  updateModel : UpdatePasswordModel = {
    id: '',
    program: '',
    login: '',
    pass: '',
    projectId: ''
  }

  passwordModel : PasswordModel = {
    id: '',
    program: '',
    login: '',
    pass:'',
    projectId: '',
    futureProject: {
      id: '',
      clientName: '',
      phoneNumber: '',
      projectName: '',
      amount: 1,
      budgetTarget: 1,
      received: 1,
      startingDate: '',
      endingDate: '',
      employeePercent: [],
      employees: [],
      passwords: []
    }
  }

  passwords !: PasswordModel[];

  createPassword(){
    this._passwordService.createPassword(this.createModel).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  deletePassword(id:string){
    this.deleteModel.id = id;

    this._passwordService.deletePassword(this.deleteModel).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  updatePassword(){
    this._passwordService.updatePassword(this.updateModel).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

  getPasswordById(id:string){
    this._passwordService.getPasswordById(id).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

  getAllPasswords(){
    this._passwordService.getPassword().subscribe(
      (data)=>{
        this.passwords = data;
      }
    )
  }
  
changeIdUpdate(id:string) {
    this.updateModel.id = id;
  }

}
