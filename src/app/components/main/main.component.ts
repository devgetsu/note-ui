import { CanActivateFn, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service/project.service';
import { ProjectModel } from '../../interfaces/project-interfaces/get-pr';
import { DeleteProjectModel } from '../../interfaces/project-interfaces/delete-pr';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  
  constructor(private _projectService : ProjectService, private _router : Router){}

  ngOnInit(): void {
    this.getAllProjects();
  }

  cardData: any = {
    projectMoney: 0,
    targetAmount: 0,
    receivedMoney: 0,
    remainingMoney: 0,
    salaryEmployee: 0,
    fines: 0,
    remainingSalary: 0,
    expenses: 0,
    projectsCount: 0,
    employeesCount: 0,
    salaryPercentage: 0
  };


  private sumField(data: any[], field: string): number {
    return data.reduce((sum, item) => sum + (item[field] || 0), 0);
  }

  projects !: ProjectModel[];
  
  deleteModel : DeleteProjectModel = {
    id : ''
  }

  getAllProjects(){
    this._projectService.getProject().subscribe(
      (data)=>{
        this.projects = data;

        this.cardData.projectMoney = this.sumField(data, 'amount')
        this.cardData.targetAmount = this.sumField(data, 'budgetTarget')
        this.cardData.receivedMoney = this.sumField(data, 'received')
        this.cardData.remainingMoney = this.cardData.projectMoney - this.cardData.receivedMoney
        this.cardData.projectsCount = data.length;
      }
    )
  }

  deleteProject(id : string){
    this.deleteModel.id = id;
    this._projectService.deleteProject(this.deleteModel).subscribe(
      (data) =>{
        console.log(data)
        this._router.navigate(['/main']);
            setTimeout(() => {
            window.location.reload();
            }, 1)
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
    this._router.navigateByUrl(`/projects-edit/${id}`)
  }

  changeRoutCreate(){
    this._router.navigateByUrl(`/projects-post`)
  }
}
