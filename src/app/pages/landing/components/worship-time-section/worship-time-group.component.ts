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
  selector: 'worship-time-group',
  templateUrl: './worship-time-group.component.html',
  styleUrls: ['./worship-time-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorshipTimeGroupComponent implements OnInit, AfterViewInit {

  @ViewChild('iconElem', {read: ElementRef})
  iconElem?: ElementRef;

  @Input()
  worshipTimeGroup?: WorshipTimeGroup;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.worshipTimeGroup?.decoration && this.iconElem) {
      this.renderer.setStyle(this.iconElem.nativeElement, 'color', this.worshipTimeGroup.decoration.color)
      this.renderer.setStyle(this.iconElem.nativeElement, 'background', this.worshipTimeGroup.decoration.background)
      this.renderer.setStyle(this.iconElem.nativeElement, 'box-shadow', this.worshipTimeGroup.decoration.boxShadow)
    }
  }

}
