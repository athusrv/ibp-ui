import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
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

}
