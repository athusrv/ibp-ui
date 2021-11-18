import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorshipTimeSectionComponent } from './worship-time-section.component';
import {TuiMarkerIconModule} from "@taiga-ui/kit";
import {TuiForModule} from "@taiga-ui/cdk";



@NgModule({
  declarations: [
    WorshipTimeSectionComponent
  ],
  exports: [
    WorshipTimeSectionComponent
  ],
  imports: [
    CommonModule,
    TuiMarkerIconModule,
    TuiForModule
  ]
})
export class WorshipTimeSectionModule { }
