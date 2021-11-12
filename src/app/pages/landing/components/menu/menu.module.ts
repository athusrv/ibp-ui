import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {MenuLinkModule} from "../../directives/menu-link/menu-link.module";


@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuLinkModule
  ]
})
export class MenuModule {
}
