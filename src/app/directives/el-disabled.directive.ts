import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appElDisabled]',
  standalone: true,
})
export class ElDisabledDirective {
  @HostBinding('class.disable')
  @Input()
  elDisabled: boolean = false;

  @HostBinding('attr.disabled') disabled = this.elDisabled;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (!this.elDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
