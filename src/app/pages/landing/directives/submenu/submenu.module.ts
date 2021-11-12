import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuDirective } from './submenu.directive';



@NgModule({
    declarations: [
        SubmenuDirective
    ],
    exports: [
        SubmenuDirective
    ],
    imports: [
        CommonModule
    ]
})
export class SubmenuModule { }
