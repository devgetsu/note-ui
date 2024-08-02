import { Component } from '@angular/core';
import { ConsumptionService } from '../../../services/consumption-service/consumption.service';
import { Router } from '@angular/router';
import { CreateConsumptionModel } from '../../../interfaces/consumption-interfaces/cr-consumption';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consumption-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consumption-post.component.html',
  styleUrl: './consumption-post.component.scss'
})
export class ConsumptionPostComponent {
  constructor(private _consumptionService : ConsumptionService, private _router: Router){}

  createModel : CreateConsumptionModel = {
    whyNeeded: '',
    description: '',
    amount: 0
  }

  createConsumption(){
    this._consumptionService.createConsumption(this.createModel).subscribe(
      (data)=>{
        console.log(data);
        this._router.navigate(['/consumption']);
            setTimeout(() => {
            window.location.reload();
            }, 1)
      }
    );
  }
}
