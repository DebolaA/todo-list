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
  selector: '[appBtnType]',
  standalone: true,
})
export class BtnTypeDirective {
  @HostBinding('attr.btnType')
  @Input()
  btnType: string = 'default';
  backgndColor: string = '';
  color: string = COLORS.default;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    console.log(this.btnType);
    this.updateBckgndColor();
  }

  // @HostListener('change') ngOnChanges() {
  //   console.log(this.btnType);
  //   this.updateBckgndColor();
  // }

  @HostBinding('style.backgroundColor') backgroundColor = this.backgndColor;
  @HostBinding('style.border') border = `1px solid ${this.backgndColor}`;

  updateBckgndColor() {
    switch (this.btnType) {
      case 'primary':
        {
          this.backgndColor = COLORS.primary;
          this.color = COLORS.light;
        }
        break;
      case 'secondary':
        {
          this.backgndColor = COLORS.secondary;
          this.color = COLORS.light;
        }
        break;
      case 'success':
        {
          this.backgndColor = COLORS.success;
          this.color = COLORS.light;
          this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            COLORS.success
          );
        }
        break;
      case 'warning':
        {
          this.backgndColor = COLORS.warning;
          this.color = COLORS.light;
        }
        break;
      case 'danger':
        {
          this.backgndColor = COLORS.danger;
          this.color = COLORS.light;
        }
        break;
      case 'info':
        {
          this.backgndColor = COLORS.info;
          this.color = COLORS.light;
        }
        break;
      case 'dark':
        {
          this.backgndColor = COLORS.dark;
          this.color = COLORS.light;
        }
        break;
      case 'light':
        {
          this.backgndColor = COLORS.light;
          this.color = COLORS.dark;
        }
        break;
      default:
        {
          this.backgndColor = COLORS.default;
          this.color = COLORS.dark;
        }
        break;
    }
  }
}
