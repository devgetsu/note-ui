import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http : HttpClient) { }

  apiUrl = environment.apiUrl + 'api/Project'

  createProject(){}
}
