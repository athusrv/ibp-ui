import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {SubmenuDirective} from "../../directives/submenu/submenu.directive";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, AfterViewInit {

  @ContentChild(SubmenuDirective)
  private subMenu?: SubmenuDirective;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.subMenu?.el.nativeElement)
      this.renderer.addClass(this.subMenu?.el.nativeElement, 'submenus')
  }

}
