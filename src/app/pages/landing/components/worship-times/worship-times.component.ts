import {Component, OnInit} from '@angular/core';
import {WorshipTimeGroup} from "../../../../models/worship-time-group";
import {faBible, faExclamationTriangle, faPray} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'worship-times',
  templateUrl: './worship-times.component.html',
  styleUrls: ['./worship-times.component.scss']
})
export class WorshipTimesComponent implements OnInit {

  faExclamation = faExclamationTriangle;

  worshipTimeGroups: WorshipTimeGroup[] = [
    {
      title: 'Cultos Dominicais',
      subtitle: 'Todos os domingos',
      icon: faBible,
      decoration: {
        color: '#7D39FF',
        background: '#CEB5FF',
        boxShadow: '0px 16px 80px rgba(125, 57, 255, 0.1), 0px 10.3704px 46.8519px rgba(125, 57, 255, 0.0759259), 0px 6.16296px 25.4815px rgba(125, 57, 255, 0.0607407), 0px 3.2px 13px rgba(125, 57, 255, 0.05), 0px 1.3037px 6.51852px rgba(125, 57, 255, 0.0392593), 0px 0.296296px 3.14815px rgba(125, 57, 255, 0.0240741)'
      },
      periods: [
        {
          title: 'Manhã',
          times: ['09:00h', '10:30h']
        },
        {
          title: 'Noite (YouTube)',
          times: ['18:00h']
        }
      ]
    },
    {
      title: 'Cultos de Oração',
      subtitle: 'Todas as quartas',
      icon: faPray,
      decoration: {
        color: '#EC2950',
        background: '#F8B4C2',
        boxShadow: '0px 16px 80px rgba(236, 41, 80, 0.1), 0px 10.3704px 46.8519px rgba(236, 41, 80, 0.0759259), 0px 6.16296px 25.4815px rgba(236, 41, 80, 0.0607407), 0px 3.2px 13px rgba(236, 41, 80, 0.05), 0px 1.3037px 6.51852px rgba(236, 41, 80, 0.0392593), 0px 0.296296px 3.14815px rgba(236, 41, 80, 0.0240741)'
      },
      periods: [
        {
          title: 'Noite',
          times: ['19:30h']
        }
      ]
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
