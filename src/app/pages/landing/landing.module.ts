import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {RouterModule} from "@angular/router";
import {MenuItemModule} from "./components/menu-item/menu-item.module";
import {SocialMediaButtonsModule} from "../common/components/social-media-buttons/social-media-buttons.module";


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
    MenuItemModule,
    SocialMediaButtonsModule
  ]
})
export class LandingModule {
}
