import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPostComponent } from './project-post.component';

describe('ProjectPostComponent', () => {
  let component: ProjectPostComponent;
  let fixture: ComponentFixture<ProjectPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
