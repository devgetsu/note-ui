import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPostComponent } from './password-post.component';

describe('PasswordPostComponent', () => {
  let component: PasswordPostComponent;
  let fixture: ComponentFixture<PasswordPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
