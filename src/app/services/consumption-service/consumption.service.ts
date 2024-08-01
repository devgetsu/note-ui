import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ResponseModel } from '../../interfaces/respnse-model/response-model';
import { Observable } from 'rxjs';
import { CreateConsumptionModel } from '../../interfaces/consumption-interfaces/cr-consumption';
import { ConsumptionModel } from '../../interfaces/consumption-interfaces/get-consumption';
import { UpdateConsumptionModel } from '../../interfaces/consumption-interfaces/up-consumption';
import { DeleteConsumptionModel } from '../../interfaces/consumption-interfaces/del-consumption';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  constructor(private _http : HttpClient) { }

  apiUrl = environment.apiUrl + 'api/Consumption'

  createConsumption(model: CreateConsumptionModel) : Observable<ResponseModel>{
    return this._http.post<ResponseModel>(this.apiUrl, model);
  }

  getConsumption(): Observable<ConsumptionModel[]>{
    return this._http.get<ConsumptionModel[]>(this.apiUrl);
  }

  updateConsumption(model: UpdateConsumptionModel): Observable<ResponseModel>{
    return this._http.put<ResponseModel>(this.apiUrl, model)
  }
  
  deleteConsumption(model: DeleteConsumptionModel): Observable<ResponseModel> {
    return this._http.delete<ResponseModel>(this.apiUrl, { body: model });
  }

  getConsumptionById(id:string) : Observable<ConsumptionModel>{
    return this._http.get<ConsumptionModel>(this.apiUrl+`/${id}`);
  } 
}
