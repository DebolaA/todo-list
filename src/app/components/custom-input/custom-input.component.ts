import {
  Component,
  HostListener,
  Input,
  OnInit,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ITextInput } from 'src/app/interfaces/text-input.dt';
import {
  OnChangeFn,
  OnTouchFn,
} from 'src/app/utils/control-value-accessor-functions';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor, OnInit {
  inputVal: string = '';
  disabled: boolean = false;
  @Input() todoItemContent: ITextInput | undefined = undefined;
  @Input() parentForm: FormGroup | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}

  onChange: OnChangeFn<string> = () => {};

  onTouched: OnTouchFn = () => {};

  get formField(): FormControl | undefined {
    const fieldName: string | undefined = this.todoItemContent?.formFieldName;
    if (!(fieldName && fieldName.length)) return undefined;
    return this.parentForm?.get(fieldName) as FormControl;
  }

  onValueChanged = (event: Event) => {
    const value: string = (<HTMLInputElement>event.target).value;
    this.inputVal = value;
    this.onChange(value);
  };

  @HostListener('blur')
  @HostListener('focus')
  onFocusOut(): void {
    this.onTouched();
  }

  // Control Value Accessor Section
  public writeValue(value: string): void {
    if (value === null || value === undefined) {
      this.inputVal = '';
      return;
    }
    this.inputVal = value;
  }
  public registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: OnTouchFn): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    if (this.todoItemContent) this.todoItemContent.disabled = false;
  }
}
