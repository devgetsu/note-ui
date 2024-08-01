import { CanActivateFn, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service/project.service';
import { ProjectModel } from '../../interfaces/project-interfaces/get-pr';
import { DeleteProjectModel } from '../../interfaces/project-interfaces/delete-pr';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor(private _projectService : ProjectService, private _route : Router){}
  ngOnInit(): void {
    this.getAllProjects();
  }

  projects !: ProjectModel[];
  
  deleteModel : DeleteProjectModel = {
    id : ''
  }

  getAllProjects(){
    this._projectService.getProject().subscribe(
      (data)=>{
        this.projects = data;
      }
    )
  }

  deleteProject(id : string){
    this.deleteModel.id = id;
    this._projectService.deleteProject(this.deleteModel).subscribe(
      (data) =>{
        console.log(data)
      }
    )
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  changeRoutEdit(id:string){
    this._route.navigateByUrl(`/projects-edit/${id}`)
  }

  changeRoutCreate(){
    this._route.navigateByUrl(`/projects-post`)
  }
}
