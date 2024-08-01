import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { PasswordService } from '../../../services/password-service/password.service';
import { UpdatePasswordModel } from '../../../interfaces/password-interfaces/update-password';

@Component({
  selector: 'app-password-edit',
  standalone: true,
  imports: [],
  templateUrl: './password-edit.component.html',
  styleUrl: './password-edit.component.scss'
})
export class PasswordEditComponent {
  constructor(private _projectService : ProjectService, private _passwordService : PasswordService) {
  }

  getPasswordById(id:string){
    this._passwordService.getPasswordById(id).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }
  
  updateModel : UpdatePasswordModel = {
    id: '',
    program: '',
    login: '',
    pass: '',
    projectId: ''
  }
  changeIdUpdate(id:string) {
    this.updateModel.id = id;
  }


}
