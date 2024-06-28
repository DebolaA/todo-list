import { CommonModule } from '@angular/common';
import {
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
  imports: [CommonModule],
  hostDirectives: [ButtonDirective, TooltipDirective],
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonContent: ISubmitInput | undefined = undefined;
  @Input() disabled: boolean = false;
  @Output() clickEvent = new EventEmitter<Event>();

  @HostListener('blur')
  @HostListener('focus')
  onFocusOut(): void {}

  @HostListener('click')
  onClickBtn(event: Event): void {
    this.clickEvent.emit(event);
  }

  ngOnInit(): void {}
}
