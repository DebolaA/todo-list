import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { ITextInput } from 'src/app/interfaces/text-input.dt';
import {
  OnChangeFn,
  OnTouchFn,
} from 'src/app/utils/control-value-accessor-functions';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
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
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
