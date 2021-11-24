import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFrontCardComponent } from './social-front-card.component';

describe('SocialFrontCardComponent', () => {
  let component: SocialFrontCardComponent;
  let fixture: ComponentFixture<SocialFrontCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialFrontCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFrontCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
