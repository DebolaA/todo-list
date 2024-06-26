import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { COLORS } from '../model/color.dt';

@Directive({
  selector: '[appBckgndColor]',
  standalone: true,
})
export class BckgndColorDirective {
  @Input() backgndcolor: string = COLORS.default;
  color: string = COLORS.default;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.updateBckgndColor();
  }

  @HostListener('change') ngOnChanges() {
    this.updateBckgndColor();
  }

  @HostBinding('style.backgroundColor') backgroundColor = this.backgndcolor;
  @HostBinding('style.border') border = `1px solid ${this.backgndcolor}`;

  updateBckgndColor() {
    switch (this.backgndcolor) {
      case 'primary':
        {
          this.backgndcolor = COLORS.primary;
          this.color = COLORS.light;
        }
        break;
      case 'secondary':
        {
          this.backgndcolor = COLORS.secondary;
          this.color = COLORS.light;
        }
        break;
      case 'success':
        {
          this.backgndcolor = COLORS.success;
          this.color = COLORS.light;
        }
        break;
      case 'warning':
        {
          this.backgndcolor = COLORS.warning;
          this.color = COLORS.light;
        }
        break;
      case 'danger':
        {
          this.backgndcolor = COLORS.danger;
          this.color = COLORS.light;
        }
        break;
      case 'info':
        {
          this.backgndcolor = COLORS.info;
          this.color = COLORS.light;
        }
        break;
      case 'dark':
        {
          this.backgndcolor = COLORS.dark;
          this.color = COLORS.light;
        }
        break;
      case 'light':
        {
          this.backgndcolor = COLORS.light;
          this.color = COLORS.dark;
        }
        break;
      default:
        {
          this.backgndcolor = COLORS.default;
          this.color = COLORS.dark;
        }
        break;
    }
  }
}
