import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaButtonsComponent } from './social-media-buttons.component';



@NgModule({
    declarations: [
        SocialMediaButtonsComponent
    ],
    exports: [
        SocialMediaButtonsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SocialMediaButtonsModule { }
