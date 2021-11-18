import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorshipTimeSectionComponent } from './worship-time-section.component';
import {TuiMarkerIconModule} from "@taiga-ui/kit";
import {TuiForModule} from "@taiga-ui/cdk";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



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
    TuiForModule,
    FontAwesomeModule
  ]
})
export class WorshipTimeSectionModule { }
