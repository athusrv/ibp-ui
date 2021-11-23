import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributeComponent } from './contribute.component';
import {TuiButtonModule} from "@taiga-ui/core";



@NgModule({
    declarations: [
        ContributeComponent
    ],
    exports: [
        ContributeComponent
    ],
  imports: [
    CommonModule,
    TuiButtonModule
  ]
})
export class ContributeModule { }
