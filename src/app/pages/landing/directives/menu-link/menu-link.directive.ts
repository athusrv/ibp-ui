import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {Router} from "@angular/router";

@Directive({
  selector: '[menuLink]',
})
export class MenuLinkDirective {

  @Input('menuLink')
  route: string = ''

  constructor(private el: ElementRef, private router: Router) {
    el.nativeElement.addEventListener('click', () => {
      this.router.navigate([this.route])
    })
  }

}
