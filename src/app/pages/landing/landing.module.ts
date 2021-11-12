import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {RouterModule} from "@angular/router";
import {HomeModule} from "./components/home/home.module";
import {AboutModule} from "./components/about/about.module";
import {FooterModule} from "./components/footer/footer.module";


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
  ]
})
export class LandingModule {
}
