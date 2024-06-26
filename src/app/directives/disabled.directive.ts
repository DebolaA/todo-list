import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone: true,
})
export class DisabledDirective {
  @HostBinding('attr.elDisabled')
  @Input()
  elDisabled: boolean = false;

  @HostBinding('attr.disabled') disabled = this.elDisabled;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log(this.elDisabled);
    if (!this.elDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
