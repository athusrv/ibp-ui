import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorshipTimesComponent } from './worship-times.component';
import {TuiButtonModule, TuiHintModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiMarkerIconModule} from "@taiga-ui/kit";
import {WorshipTimeGroupModule} from "../worship-time-section/worship-time-group.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        WorshipTimesComponent
    ],
    exports: [
        WorshipTimesComponent
    ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiHintModule,
    TuiMarkerIconModule,
    WorshipTimeGroupModule,
    FontAwesomeModule
  ]
})
export class WorshipTimesModule { }
