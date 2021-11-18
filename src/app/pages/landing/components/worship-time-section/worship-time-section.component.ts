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
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

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

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.worshipTime?.decoration && this.iconElem) {
      this.renderer.setStyle(this.iconElem.nativeElement, 'color', this.worshipTime?.decoration.color)
      this.renderer.setStyle(this.iconElem.nativeElement, 'background', this.worshipTime?.decoration.background)
      this.renderer.setStyle(this.iconElem.nativeElement, 'box-shadow', this.worshipTime?.decoration.boxShadow)
    }
  }

}
