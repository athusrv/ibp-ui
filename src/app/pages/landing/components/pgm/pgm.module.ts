import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgmComponent } from './pgm.component';
import {TuiButtonModule} from "@taiga-ui/core";



@NgModule({
    declarations: [
        PgmComponent
    ],
    exports: [
        PgmComponent
    ],
  imports: [
    CommonModule,
    TuiButtonModule
  ]
})
export class PgmModule { }
