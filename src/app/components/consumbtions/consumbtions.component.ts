import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConsumptionService } from '../../services/consumption-service/consumption.service';
import { DeleteConsumptionModel } from '../../interfaces/consumption-interfaces/del-consumption';
import { ConsumptionModel } from '../../interfaces/consumption-interfaces/get-consumption';

@Component({
  selector: 'app-consumbtions',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './consumbtions.component.html',
  styleUrl: './consumbtions.component.scss'
})
export class ConsumbtionsComponent implements OnInit{

  constructor(private _consumptionService : ConsumptionService, private _router: Router) { }

  ngOnInit(): void {
    this.getAllConsumption();
  }

  deleteModel : DeleteConsumptionModel = {
    id : ''
  }

  consumptionModel : ConsumptionModel = {
    id: '',
    whyNeeded: '',
    description: '',
    amount: 0
  }

  consumptions !: ConsumptionModel[];

  deleteConsumption(id:string){
    this.deleteModel.id = id;

    this._consumptionService.deleteConsumption(this.deleteModel).subscribe(
      (data)=>{
        console.log(data);
        this._router.navigate(['/consumption']);
            setTimeout(() => {
            window.location.reload();
            }, 1)
      }
    );
  }

  changeRoutEdit(id:string){
    this._router.navigateByUrl(`/consumption-edit/${id}`)
  }

  changeRoutCreate(){
    this._router.navigateByUrl(`/consumption-post`)
  }

  getAllConsumption(){
    this._consumptionService.getConsumption().subscribe(
      (data)=>{
        this.consumptions = data;
      }
    )
  }
}
