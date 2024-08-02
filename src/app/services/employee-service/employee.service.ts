import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CreateEmployeeModel } from '../../interfaces/employee-interfaces/cr-employee';
import { ResponseModel } from '../../interfaces/respnse-model/response-model';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../interfaces/employee-interfaces/get-employee';
import { UpdateEmployeeModel } from '../../interfaces/employee-interfaces/up-employee';
import { DeleteEmployeeModel } from '../../interfaces/employee-interfaces/del-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  apiUrl = environment.apiUrl + 'api/Employees'

  createEmployee(model: CreateEmployeeModel) : Observable<ResponseModel>{
    return this._http.post<ResponseModel>(this.apiUrl, model);
  }

  getEmployee(): Observable<EmployeeModel[]>{
    return this._http.get<EmployeeModel[]>(this.apiUrl);
  }

  updateEmployee(model: UpdateEmployeeModel): Observable<ResponseModel>{
    return this._http.put<ResponseModel>(this.apiUrl, model);
  }
  
  deleteEmployee(model: DeleteEmployeeModel): Observable<ResponseModel> {
    return this._http.delete<ResponseModel>(this.apiUrl, { body: model });
  }

  getEmployeeById(id:string) : Observable<EmployeeModel>{
    return this._http.get<EmployeeModel>(this.apiUrl+`/${id}`);
  } 
}
