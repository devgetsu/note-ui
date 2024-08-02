import { Component, OnInit } from '@angular/core';
import { ConsumptionService } from '../../../services/consumption-service/consumption.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateConsumptionModel } from '../../../interfaces/consumption-interfaces/up-consumption';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consumption-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consumption-update.component.html',
  styleUrl: './consumption-update.component.scss'
})
export class ConsumptionUpdateComponent implements OnInit {

  constructor(
    private _consumptionService: ConsumptionService, 
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  updateModel: UpdateConsumptionModel = {
    id: '',
    whyNeeded: '',
    description: '',
    amount: 0
  };

  ngOnInit(): void {
    this.changeIdUpdate();
    this.getConsumptionById(this.updateModel.id);
  }

  getConsumptionById(id: string) {
    this._consumptionService.getConsumptionById(id).subscribe(data => {
      this.updateModel.whyNeeded = data.whyNeeded;
      this.updateModel.description = data.description;
      this.updateModel.amount = data.amount;
    });
  }

  changeIdUpdate() {
    this.route.paramMap.subscribe(params => {
      this.updateModel.id = params.get('id') || '';
      if (this.updateModel.id) {
        this.getConsumptionById(this.updateModel.id);
      }
    });
  }

  updateConsumption() {
    this._consumptionService.updateConsumption(this.updateModel).subscribe(data => {
      console.log(data);
      this._router.navigate(['/consumption']);
            setTimeout(() => {
            window.location.reload();
            }, 1)
    });
  }
}
