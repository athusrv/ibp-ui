import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "./models/menu-item";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  active: boolean = false;

  @Input()
  data?: MenuItem

  constructor() {
  }

  ngOnInit(): void {
  }

}
