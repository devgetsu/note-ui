import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { UpdateProjectModel } from '../../../interfaces/project-interfaces/update-pr';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project-edit.component.html',
  styleUrl: './project-edit.component.scss'
})
export class ProjectEditComponent implements OnInit{

  constructor(private _projectService : ProjectService,  private route: ActivatedRoute, private _router: Router){ }
  
  ngOnInit(): void {
    this.changeIdUpdate();
    this.getProjectById(this.updateModel.id);
  }

  updateModel : UpdateProjectModel = {
    id:'',
    clientName: '',
    phoneNumber: '',
    projectName: '',
    amount: 0,
    budgetTarget: 0,
    received: 0,
    startingDate: '',
    endingDate: '',
  }

  updateProject(){
    this._projectService.updateProject(this.updateModel).subscribe(
      (data)=>{
        console.log(data)
        this._router.navigate(['/main']);
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
        this.getProjectById(this.updateModel.id);
      }
    });
  }
  
  getProjectById(id:string){
    this._projectService.getProjectById(id).subscribe(
      (data)=>{
        this.updateModel.clientName = data.clientName
        this.updateModel.amount = data.amount
        this.updateModel.budgetTarget = data.budgetTarget
        this.updateModel.phoneNumber = data.phoneNumber
        this.updateModel.projectName = data.projectName
        this.updateModel.received = data.received
        this.updateModel.endingDate = data.endingDate
        this.updateModel.startingDate = data.startingDate
      }
    )
  }
}
