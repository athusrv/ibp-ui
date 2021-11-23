import {Component, Input, OnInit} from '@angular/core';
import {faAppStore, faFacebookSquare, faGooglePlay, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";

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

  icons = [
    faYoutube,
    faInstagram,
    faFacebookSquare,
    faMobileAlt,
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
