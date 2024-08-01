import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPostComponent } from './employees-post.component';

describe('EmployeesPostComponent', () => {
  let component: EmployeesPostComponent;
  let fixture: ComponentFixture<EmployeesPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
