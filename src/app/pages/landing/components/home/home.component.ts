import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../../models/menu-item";
import {MenuItemEvent} from "../../../models/menu-item-event";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, MenuItemEvent {
  menus: MenuItem[] = [
    new MenuItem('Igreja', this, [
      new MenuItem('A IBP', this),
      new MenuItem('Cultos', this),
      new MenuItem('PGMs', this),
    ]),
    new MenuItem('Ministérios', this),
    new MenuItem('Eventos'),
    new MenuItem('Contribua'),
    new MenuItem('Contato'),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(item: MenuItem): void {
    console.log(item)
  }

}
