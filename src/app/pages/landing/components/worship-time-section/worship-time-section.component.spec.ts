import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipTimeSectionComponent } from './worship-time-section.component';

describe('WorshipTimeSectionComponent', () => {
  let component: WorshipTimeSectionComponent;
  let fixture: ComponentFixture<WorshipTimeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorshipTimeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorshipTimeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
