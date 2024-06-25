import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';
import { COLORS } from '../model/color.dt';

@Directive({
  selector: '[appBckgndColor]',
})
export class BckgndColorDirective {
  @Input('backgndcolor') backgndcolor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.updateBckgndColor();
  }

  updateBckgndColor() {
    switch (this.backgndcolor) {
      case 'primary':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.primary
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.primary}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.light}`
          );
        }
        break;
      case 'secondary':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.secondary
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.secondary}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.light}`
          );
        }
        break;
      case 'success':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.success
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `${COLORS.success}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.light}`
          );
        }
        break;
      case 'warning':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.warning
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.warning}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.light}`
          );
        }
        break;
      case 'danger':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.danger
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.danger}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.light}`
          );
        }
        break;
      case 'info':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.info
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.info}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.light}`
          );
        }
        break;
      case 'dark':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.dark
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.dark}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.light}`
          );
        }
        break;
      case 'light':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.light
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.light}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.dark}`
          );
        }
        break;
      default:
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.default
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.default}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            `${COLORS.dark}`
          );
        }
        break;
    }
  }
}
