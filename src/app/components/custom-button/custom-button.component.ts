import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
import { ButtonDirective } from 'src/app/directives/button.directive';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { ISubmitInput } from 'src/app/interfaces/text-input.dt';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  imports: [CommonModule],
  hostDirectives: [ButtonDirective],
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonContent: ISubmitInput | undefined = undefined;
  @Input() disabled: boolean = false;
  @Output() clickEvent = new EventEmitter<ISubmitInput>();

  @HostListener('blur')
  @HostListener('focus')
  onFocusOut(): void {}

  @HostListener('click')
  onClickBtn(event: Event): void {
    this.clickEvent.emit(this.buttonContent);
  }

  ngOnInit(): void {}
}
