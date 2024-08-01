import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { PasswordService } from '../../../services/password-service/password.service';
import { UpdatePasswordModel } from '../../../interfaces/password-interfaces/update-password';
import { FormsModule } from '@angular/forms';
import { ProjectModel } from '../../../interfaces/project-interfaces/get-pr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-edit.component.html',
  styleUrl: './password-edit.component.scss'
})
export class PasswordEditComponent implements OnInit{
  constructor(private _projectService : ProjectService, private _passwordService : PasswordService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.changeIdUpdate();
    this.getAllProjects();
    this.getPasswordById(this.updateModel.id);
  }

  getPasswordById(id:string){
    this._passwordService.getPasswordById(id).subscribe(
      (data)=>{
        this.updateModel.login = data.login
        this.updateModel.pass = data.pass
        this.updateModel.program = data.program
        this.updateModel.projectId = data.projectId
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
  
  changeIdUpdate() {
    this.route.paramMap.subscribe(params => {
      this.updateModel.id != params.get('id');
    });
  }

  projects !: ProjectModel[];
  
  getAllProjects(){
    this._projectService.getProject().subscribe(
      (data)=>{
        this.projects = data;
      }
    )
  }

  updatePassword(){
    this._passwordService.updatePassword(this.updateModel).subscribe(
      (data)=>{
        console.log(data);
      })
  }
}
