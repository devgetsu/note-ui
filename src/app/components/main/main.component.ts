import { CanActivateFn } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service/project.service';
import { ProjectModel } from '../../interfaces/project-interfaces/get-pr';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor(private _projectService : ProjectService){}
  ngOnInit(): void {
    this.getAllProjects();
  }

  projects !: ProjectModel[];

  getAllProjects(){
    this._projectService.getProject().subscribe(
      (data)=>{
        this.projects = data;
      }
    )
  }
}
