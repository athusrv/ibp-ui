import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorshipTimeGroupComponent} from './worship-time-group.component';
import {TuiMarkerIconModule} from "@taiga-ui/kit";
import {TuiForModule} from "@taiga-ui/cdk";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    WorshipTimeGroupComponent
  ],
  exports: [
    WorshipTimeGroupComponent
  ],
  imports: [
    CommonModule,
    TuiMarkerIconModule,
    TuiForModule,
    FontAwesomeModule
  ]
})
export class WorshipTimeGroupModule {
}
