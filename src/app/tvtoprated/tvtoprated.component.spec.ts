import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvtopratedComponent } from './tvtoprated.component';

describe('TvtopratedComponent', () => {
  let component: TvtopratedComponent;
  let fixture: ComponentFixture<TvtopratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvtopratedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvtopratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
