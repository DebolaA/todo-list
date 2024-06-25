import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appElDisabled]',
})
export class ElDisabledDirective {
  @Input()
  @HostBinding('class.disabled')
  disabled = false;
}
