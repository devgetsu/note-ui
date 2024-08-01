import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionUpdateComponent } from './consumption-update.component';

describe('ConsumptionUpdateComponent', () => {
  let component: ConsumptionUpdateComponent;
  let fixture: ComponentFixture<ConsumptionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumptionUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumptionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
