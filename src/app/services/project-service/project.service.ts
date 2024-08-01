import { ProjectModel } from './../../interfaces/project-interfaces/get-pr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../interfaces/respnse-model/response-model';
import { UpdateProjectModel } from '../../interfaces/project-interfaces/update-pr';
import { DeleteProjectModel } from '../../interfaces/project-interfaces/delete-pr';
import { CreateProjectModel } from '../../interfaces/project-interfaces/create-pr';
import { __makeTemplateObject } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http : HttpClient) { }

  apiUrl = environment.apiUrl + 'api/Projects'

  createProject(model: CreateProjectModel) : Observable<ResponseModel>{
    return this._http.post<ResponseModel>(this.apiUrl, model);
  }

  getProject(): Observable<ProjectModel[]>{
    return this._http.get<ProjectModel[]>(this.apiUrl);
  }

  updateProject(model: UpdateProjectModel): Observable<ResponseModel>{
    return this._http.put<ResponseModel>(this.apiUrl, model)
  }
  deleteProject(model: DeleteProjectModel): Observable<ResponseModel> {
    return this._http.delete<ResponseModel>(this.apiUrl, { body: model });
  }

  getProjectById(id:string) : Observable<ProjectModel>{
    return this._http.get<ProjectModel>(this.apiUrl+`/${id}`);
  } 
}
