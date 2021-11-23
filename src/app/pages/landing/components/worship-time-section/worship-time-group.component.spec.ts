import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipTimeGroupComponent } from './worship-time-group.component';

describe('WorshipTimeSectionComponent', () => {
  let component: WorshipTimeGroupComponent;
  let fixture: ComponentFixture<WorshipTimeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorshipTimeGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorshipTimeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
