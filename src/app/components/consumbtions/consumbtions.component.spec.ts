import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumbtionsComponent } from './consumbtions.component';

describe('ConsumbtionsComponent', () => {
  let component: ConsumbtionsComponent;
  let fixture: ComponentFixture<ConsumbtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumbtionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumbtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
