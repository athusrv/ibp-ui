import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[submenu]'
})
export class SubmenuDirective {

  constructor(public el: ElementRef) { }

}
