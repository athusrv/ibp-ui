import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "./components/menu-item/models/menu-item";
import {MenuItemEvent} from "./components/menu-item/models/menu-item-event";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, MenuItemEvent {
  menus: MenuItem[] = [
    new MenuItem('Igreja', this, [
      new MenuItem('Nossa Visão', this),
      new MenuItem('Pastores', this),
    ]),
    new MenuItem('Eventos'),
    new MenuItem('Fotos'),
    new MenuItem('Departamentos'),
    new MenuItem('Contribua'),
    new MenuItem('Contato'),
  ]
  mvv: { icon: string, title: string, content: string } [] = [
    {
      icon: 'assets/icons/bullseye.svg',
      title: 'Missão',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar in magna vel sollicitudin. Nullam at cursus ligula. Fusce et sodales nisl. Duis posuere in nibh quis mollis.'
    },
    {
      icon: 'assets/icons/eye.svg',
      title: 'Visão',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar in magna vel sollicitudin. Nullam at cursus ligula. Fusce et sodales nisl. Duis posuere in nibh quis mollis.'
    },
    {
      icon: 'assets/icons/hands.svg',
      title: 'Valores',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar in magna vel sollicitudin. Nullam at cursus ligula. Fusce et sodales nisl. Duis posuere in nibh quis mollis.'
    },
  ];
  leaders: { picture?: string, name: string, role: string } [] = [
    {
      picture: '',
      name: 'Pr Abimael',
      role: 'Presidente'
    },
    {
      picture: '',
      name: 'Pr Robson',
      role: 'Missões'
    },
    {
      picture: '',
      name: 'Pr Divanildo',
      role: 'Casais'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(item: MenuItem) {
    console.log(this.menus.find(i => i === item))
  }
}
