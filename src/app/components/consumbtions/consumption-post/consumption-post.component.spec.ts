import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionPostComponent } from './consumption-post.component';

describe('ConsumptionPostComponent', () => {
  let component: ConsumptionPostComponent;
  let fixture: ComponentFixture<ConsumptionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumptionPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumptionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
