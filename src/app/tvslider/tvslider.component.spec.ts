import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsliderComponent } from './tvslider.component';

describe('TvsliderComponent', () => {
  let component: TvsliderComponent;
  let fixture: ComponentFixture<TvsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvsliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
