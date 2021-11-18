import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorshipTimesComponent } from './worship-times.component';
import {TuiButtonModule, TuiHintModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiMarkerIconModule} from "@taiga-ui/kit";
import {WorshipTimeSectionModule} from "../worship-time-section/worship-time-section.module";



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
        WorshipTimeSectionModule
    ]
})
export class WorshipTimesModule { }
