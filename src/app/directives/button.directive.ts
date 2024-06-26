import { Directive } from '@angular/core';
import { DisabledDirective } from './disabled.directive';
import { BtnTypeDirective } from './btn-type.directive';

@Directive({
  selector: '[appButton]',
  standalone: true,
  hostDirectives: [
    { directive: DisabledDirective, inputs: ['elDisabled'] },
    { directive: BtnTypeDirective, inputs: ['btnType'] },
  ],
})
export class ButtonDirective {
  constructor() {}
}
