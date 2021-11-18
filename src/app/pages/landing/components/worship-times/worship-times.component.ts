import {Component, OnInit} from '@angular/core';
import {WorshipTimeGroup} from "../../../../models/worship-time-group";
import {faBible, faPray} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'worship-times',
  templateUrl: './worship-times.component.html',
  styleUrls: ['./worship-times.component.scss']
})
export class WorshipTimesComponent implements OnInit {

  icons: string[] = ['bible', '../../../../assets/icons/pray-solid.svg']
  worshipTimes: WorshipTimeGroup[] = [
    {
      title: 'Cultos Dominicais',
      subtitle: 'Todos os domingos',
      icon: faBible,
      decoration: {
        color: '#7D39FF',
        background: '#CEB5FF',
        boxShadow: '0px 36px 80px rgba(121, 80, 200, 0.07), 0px 23.3333px 46.8519px rgba(121, 80, 200, 0.0531481), 0px 13.8667px 25.4815px rgba(121, 80, 200, 0.0425185), 0px 7.2px 13px rgba(121, 80, 200, 0.035), 0px 2.93333px 6.51852px rgba(121, 80, 200, 0.0274815), 0px 0.666667px 3.14815px rgba(121, 80, 200, 0.0168519)'
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
        boxShadow: '0px 16px 80px rgba(236, 41, 80, 0.07), 0px 10.3704px 46.8519px rgba(236, 41, 80, 0.0531481), 0px 6.16296px 25.4815px rgba(236, 41, 80, 0.0425185), 0px 3.2px 13px rgba(236, 41, 80, 0.035), 0px 1.3037px 6.51852px rgba(236, 41, 80, 0.0274815), 0px 0.296296px 3.14815px rgba(236, 41, 80, 0.0168519'
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
