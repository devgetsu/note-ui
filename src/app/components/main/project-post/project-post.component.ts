import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { CreateProjectModel } from '../../../interfaces/project-interfaces/create-pr';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project-post.component.html',
  styleUrl: './project-post.component.scss'
})
export class ProjectPostComponent {
  constructor(private _projectService : ProjectService, private _router: Router){ }

  createModel : CreateProjectModel = {
    clientName: '',
    phoneNumber: '',
    projectName: '',
    amount: 0,
    budgetTarget: 0,
    received: 0,
    startingDate: '',
    endingDate: '',
  }

  createProject(){
    this._projectService.createProject(this.createModel).subscribe(
      (data)=>{
        console.log(data);
        this._router.navigate(['/main']);
            setTimeout(() => {
            window.location.reload();
            }, 1)
      }
    )
  }
}
