import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {SocialMediaButtonsModule} from "../../../common/components/social-media-buttons/social-media-buttons.module";



@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SocialMediaButtonsModule
  ]
})
export class FooterModule { }
