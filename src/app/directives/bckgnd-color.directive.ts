import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { COLORS } from '../model/color.dt';

@Directive({
  selector: '[appBckgndColor]',
})
export class BckgndColorDirective {
  @Input('backgndcolor') backgndcolor: string = '';
  @Input('eldisabled') eldisabled: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.updateBckgndColor();
  }

  @HostListener('change') ngOnChanges() {
    this.updateBckgndColor();
  }

  updateBckgndColor() {
    switch (this.backgndcolor) {
      case 'primary':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.disabled : COLORS.primary
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.primary}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            this.eldisabled ? COLORS.light : COLORS.primary
          );
        }
        break;
      case 'secondary':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.disabled : COLORS.secondary
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.secondary}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            this.eldisabled ? COLORS.secondary : COLORS.light
          );
        }
        break;
      case 'success':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.disabled : COLORS.success
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.success}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            this.eldisabled ? COLORS.success : COLORS.light
          );
        }
        break;
      case 'warning':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.disabled : COLORS.warning
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.warning}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            this.eldisabled ? COLORS.warning : COLORS.light
          );
        }
        break;
      case 'danger':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.disabled : COLORS.danger
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.danger}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            this.eldisabled ? COLORS.danger : COLORS.light
          );
        }
        break;
      case 'info':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.disabled : COLORS.info
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.info}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            this.eldisabled ? COLORS.info : COLORS.light
          );
        }
        break;
      case 'dark':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.dark : COLORS.disabled
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            `1px solid ${COLORS.dark}`
          );
          this.renderer.setStyle(
            this.el.nativeElement,
            'color',
            this.eldisabled ? COLORS.dark : COLORS.light
          );
        }
        break;
      case 'light':
        {
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            this.eldisabled ? COLORS.light : COLORS.disabled
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
            this.eldisabled ? COLORS.disabled : COLORS.default
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
