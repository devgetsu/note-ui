import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinePostComponent } from './fine-post.component';

describe('FinePostComponent', () => {
  let component: FinePostComponent;
  let fixture: ComponentFixture<FinePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
