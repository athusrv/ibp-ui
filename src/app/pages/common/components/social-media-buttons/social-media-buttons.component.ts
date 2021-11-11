import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-media-buttons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.scss']
})
export class SocialMediaButtonsComponent implements OnInit {
  @Input()
  direction: 'horizontal' | 'vertical' = 'vertical';
  @Input()
  animatable: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

}
