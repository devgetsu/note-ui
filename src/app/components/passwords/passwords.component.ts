import { PasswordModel } from './../../interfaces/password-interfaces/get-password';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PasswordService } from '../../services/password-service/password.service';
import { DeletePasswordModel } from '../../interfaces/password-interfaces/delete-password';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project-service/project.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-passwords',
  standalone: true,
  imports: [SidebarComponent, FormsModule,RouterModule],
  templateUrl: './passwords.component.html',
  styleUrl: './passwords.component.scss'
})
export class PasswordsComponent implements OnInit{

  constructor(private _passwordService : PasswordService, private _route: Router) { }

  ngOnInit(): void {
    this.getAllPasswords();
  }

  deleteModel : DeletePasswordModel = {
    id : ''
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
      employees: [],
      passwords: []
    }
  }

  passwords !: PasswordModel[];

  deletePassword(id:string){
    this.deleteModel.id = id;

    this._passwordService.deletePassword(this.deleteModel).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  changeRoutEdit(id:string){
    this._route.navigateByUrl(`/passwords-edit/${id}`)
  }

  changeRoutCreate(){
    this._route.navigateByUrl(`/passwords-post`)
  }

  getAllPasswords(){
    this._passwordService.getPassword().subscribe(
      (data)=>{
        this.passwords = data;
      }
    )
  }
}
