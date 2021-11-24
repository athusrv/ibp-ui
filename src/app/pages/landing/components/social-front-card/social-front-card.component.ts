import {Component, Input, OnInit} from '@angular/core';
import {SocialFrontCardData} from "../../../../models/social-front-card-data";

@Component({
  selector: 'social-front-card',
  templateUrl: './social-front-card.component.html',
  styleUrls: ['./social-front-card.component.scss']
})
export class SocialFrontCardComponent implements OnInit {
  @Input()
  data?: SocialFrontCardData

  constructor() {
  }

  ngOnInit(): void {
  }

}
