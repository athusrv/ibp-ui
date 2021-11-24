import { Component, OnInit } from '@angular/core';
import {SocialFrontCardData} from "../../../../models/social-front-card-data";
import {faBible, faChurch, faGlobeAmericas, faHandHoldingHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {

  socialFronts: SocialFrontCardData[] = [
    {
      icon: faHandHoldingHeart,
      color: '#EC2950',
      header: 'S.O.S Cesta do Amor',
      contentText: 'Projeto social para distribuição de mantimentos a famílias e pessoas carentes sobretudo durante o período de pandemia do novo coronavírus'
    },
    {
      icon: faBible,
      color: '#8AB675',
      header: 'IBP no Presídio',
      contentText: 'Propagação da mensagem de salvação dentro do presídio da cidade de Salvador. Projeto liderado pela irmã Paulina'
    },
    {
      icon: faGlobeAmericas,
      color: '#326AFF',
      header: 'Missões',
      contentText: 'Atuamos e apoiamos missões estaduais, nacionais e mundiais e já plantamos missionários em várias partes do globo, inclusive em países como a Coreia do Norte'
    },
    {
      icon: faChurch,
      color: '#FF6E04',
      header: 'Congregações',
      contentText: 'Nos orgulhamos de termos sido ponto de partida de muitas igrejas que um dia foram nossas congregações. Continuamos a cultivar e plantar igrejas em todo o estado'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
