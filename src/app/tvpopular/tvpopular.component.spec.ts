import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvpopularComponent } from './tvpopular.component';

describe('TvpopularComponent', () => {
  let component: TvpopularComponent;
  let fixture: ComponentFixture<TvpopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvpopularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
