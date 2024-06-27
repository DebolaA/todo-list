import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone: true,
})
export class DisabledDirective {
  private _disabled: boolean = false;

  @HostBinding('attr.elDisabled')
  @Input()
  public get elDisabled(): boolean {
    return this._disabled;
  }

  public set elDisabled(value: boolean) {
    this._disabled = value;
    this.updateDisabledStatus();
  }

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}

  @HostBinding('attr.disabled') disabled = this._disabled;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log(this.elDisabled);
    if (!this.elDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  updateDisabledStatus() {
    this._disabled
      ? this.el.nativeElement.classList.add('disabled')
      : this.el.nativeElement.classList.remove('disabled');
  }
}
