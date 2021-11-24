import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialFrontCardComponent } from './social-front-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        SocialFrontCardComponent
    ],
    exports: [
        SocialFrontCardComponent
    ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SocialFrontCardModule { }
