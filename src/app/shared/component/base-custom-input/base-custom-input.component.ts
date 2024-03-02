import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-custom-input',
  template: '',
})
export class BaseCustomInputComponent {
  @Input()
  name: string;
  @Input('value')
  val: string;
  @Input('formControlName')
  formControlName: string;

  // Both onChange and onTouched are functions
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }
  // We implement this method to keep a reference to the onChange
  // callback function passed by the forms API
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // We implement this method to keep a reference to the onTouched
  //callback function passed by the forms API
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // This is a basic setter that the forms API is going to use
  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }
}
