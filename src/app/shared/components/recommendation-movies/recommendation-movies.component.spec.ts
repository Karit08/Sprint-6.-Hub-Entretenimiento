import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationMoviesComponent } from './recommendation-movies.component';

describe('RecommendationMoviesComponent', () => {
  let component: RecommendationMoviesComponent;
  let fixture: ComponentFixture<RecommendationMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
