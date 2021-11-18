import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipTimesComponent } from './worship-times.component';

describe('WorshipTimesComponent', () => {
  let component: WorshipTimesComponent;
  let fixture: ComponentFixture<WorshipTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorshipTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorshipTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
