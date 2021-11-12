import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLinkDirective } from './menu-link.directive';



@NgModule({
    declarations: [
        MenuLinkDirective
    ],
    exports: [
        MenuLinkDirective
    ],
    imports: [
        CommonModule
    ]
})
export class MenuLinkModule { }
