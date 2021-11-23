import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {RouterModule} from "@angular/router";
import {HomeModule} from "./components/home/home.module";
import {AboutModule} from "./components/about/about.module";
import {FooterModule} from "./components/footer/footer.module";
import {WorshipTimesModule} from "./components/worship-times/worship-times.module";
import {PgmModule} from "./components/pgm/pgm.module";


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      }
    ]),
    HomeModule,
    AboutModule,
    FooterModule,
    WorshipTimesModule,
    PgmModule
  ]
})
export class LandingModule {
}
