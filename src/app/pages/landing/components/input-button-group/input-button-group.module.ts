import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputButtonGroupComponent } from './input-button-group.component';
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";



@NgModule({
    declarations: [
        InputButtonGroupComponent
    ],
    exports: [
        InputButtonGroupComponent
    ],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule
  ]
})
export class InputButtonGroupModule { }
