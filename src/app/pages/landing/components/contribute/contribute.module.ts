import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributeComponent } from './contribute.component';
import {TuiButtonModule} from "@taiga-ui/core";
import {SocialFrontCardModule} from "../social-front-card/social-front-card.module";



@NgModule({
    declarations: [
        ContributeComponent
    ],
    exports: [
        ContributeComponent
    ],
  imports: [
    CommonModule,
    TuiButtonModule,
    SocialFrontCardModule
  ]
})
export class ContributeModule { }
