import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaButtonsComponent } from './social-media-buttons.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        SocialMediaButtonsComponent
    ],
    exports: [
        SocialMediaButtonsComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class SocialMediaButtonsModule { }
