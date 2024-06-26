import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ButtonDirective } from 'src/app/directives/button.directive';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { ISubmitInput } from 'src/app/interfaces/text-input.dt';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  hostDirectives: [ButtonDirective, TooltipDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonContent: ISubmitInput | undefined = undefined;
  @Output() clickEvent = new EventEmitter<ISubmitInput>();
  disabled: boolean = false;

  @HostListener('blur')
  @HostListener('focus')
  onFocusOut(): void {}

  @HostListener('click')
  onClickBtn(event: Event): void {
    console.log('click');
    this.clickEvent.emit(this.buttonContent);
  }

  ngOnInit(): void {
    this.disabled = this.buttonContent?.disabled
      ? this.buttonContent?.disabled
      : false;
  }
}
