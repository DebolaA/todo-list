import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appElDisabled]',
})
export class ElDisabledDirective {
  @Input()
  @HostBinding('class.disabled')
  disabled = false;
}
