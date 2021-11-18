import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {WorshipTimeGroup} from "../../../../models/worship-time-group";

@Component({
  selector: 'worship-time-section',
  templateUrl: './worship-time-section.component.html',
  styleUrls: ['./worship-time-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorshipTimeSectionComponent implements OnInit, AfterViewInit {

  @ViewChild('iconElem', {read: ElementRef})
  iconElem?: ElementRef;

  @Input()
  worshipTime?: WorshipTimeGroup;

  @Input()
  icon: string = 'tuiIconHeartFilled'

  @Input()
  decoration?: { color: string, background: string, boxShadow: string };

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.decoration && this.iconElem) {
      this.renderer.setStyle(this.iconElem.nativeElement, 'color', this.decoration.color)
      this.renderer.setStyle(this.iconElem.nativeElement, 'background', this.decoration.background)
      this.renderer.setStyle(this.iconElem.nativeElement, 'box-shadow', this.decoration.boxShadow)
    }
  }

}
