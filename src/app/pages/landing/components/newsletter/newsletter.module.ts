import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import {TuiButtonModule, TuiGroupModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputModule} from "@taiga-ui/kit";
import {InputButtonGroupModule} from "../input-button-group/input-button-group.module";



@NgModule({
    declarations: [
        NewsletterComponent
    ],
    exports: [
        NewsletterComponent
    ],
  imports: [
    CommonModule,
    TuiGroupModule,
    TuiButtonModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    InputButtonGroupModule
  ]
})
export class NewsletterModule { }
