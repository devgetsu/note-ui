import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../../../services/password-service/password.service';
import { ProjectModel } from '../../../interfaces/project-interfaces/get-pr';
import { ProjectService } from '../../../services/project-service/project.service';
import { CreatePasswordModel } from '../../../interfaces/password-interfaces/cr-password';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-post.component.html',
  styleUrl: './password-post.component.scss'
})
export class PasswordPostComponent implements OnInit {
  constructor(private _passwordService : PasswordService, private _projectService : ProjectService){}
  ngOnInit(): void {
    this.getAllProjects();
  }

  projects !: ProjectModel[];

  
  createModel : CreatePasswordModel = {
    program: '',
    login: '',
    pass: '',
    projectId: ''
  }

  createPassword(){
    this._passwordService.createPassword(this.createModel).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  
  getAllProjects(){
    this._projectService.getProject().subscribe(
      (data)=>{
        this.projects = data;
      }
    )
  }
  
  
}