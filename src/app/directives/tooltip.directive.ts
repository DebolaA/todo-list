import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    const tooltipEl: HTMLElement =
      this.el.nativeElement.querySelector('.tooltip');
    if (tooltipEl) {
      tooltipEl.style.visibility = 'visible';
      tooltipEl.style.opacity = '1';
      tooltipEl.style.cursor = 'pointer';
    }
  }

  @HostListener('mouseleave') mouseout() {
    const tooltipEl: HTMLElement =
      this.el.nativeElement.querySelector('.tooltip');
    if (tooltipEl) {
      tooltipEl.style.visibility = 'hidden';
      tooltipEl.style.opacity = '0';
      tooltipEl.style.cursor = 'auto';
    }
  }
}
