import { Injectable } from '@angular/core';
import { CreatePasswordModel } from '../../interfaces/password-interfaces/cr-password';
import { ResponseModel } from '../../interfaces/respnse-model/response-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { PasswordModel } from '../../interfaces/password-interfaces/get-password';
import { UpdatePasswordModel } from '../../interfaces/password-interfaces/update-password';
import { DeletePasswordModel } from '../../interfaces/password-interfaces/delete-password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private _http : HttpClient) { }

  apiUrl = environment.apiUrl + 'api/Passwords'

  createPassword(model: CreatePasswordModel) : Observable<ResponseModel>{
    return this._http.post<ResponseModel>(this.apiUrl, model);
  }

  getPassword(): Observable<PasswordModel[]>{
    return this._http.get<PasswordModel[]>(this.apiUrl);
  }

  updatePassword(model: UpdatePasswordModel): Observable<ResponseModel>{
    return this._http.put<ResponseModel>(this.apiUrl, model)
  }
  deletePassword(model: DeletePasswordModel): Observable<ResponseModel> {
    return this._http.delete<ResponseModel>(this.apiUrl, { body: model });
  }

  getPasswordById(id:string) : Observable<PasswordModel>{
    return this._http.get<PasswordModel>(this.apiUrl+`/${id}`);
  } 
}
