import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SocialMediaButtonsModule} from "../../../common/components/social-media-buttons/social-media-buttons.module";
import {SubmenuModule} from "../../directives/submenu/submenu.module";
import {MenuModule} from "../menu/menu.module";
import {NavbarModule} from "../navbar/navbar.module";
import {MenuLinkModule} from "../../directives/menu-link/menu-link.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SocialMediaButtonsModule,
    NavbarModule,
    MenuModule,
    SubmenuModule,
    MenuLinkModule
  ]
})
export class HomeModule {
}
