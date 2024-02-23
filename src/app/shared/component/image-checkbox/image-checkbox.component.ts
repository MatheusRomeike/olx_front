import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-image-checkbox',
  templateUrl: './image-checkbox.component.html',
  styleUrls: ['./image-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageCheckboxComponent),
      multi: true,
    },
  ],
})
export class ImageCheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() imagePath: string;
  isChecked: boolean = false;
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: any): void {
    if (value !== undefined) {
      this.isChecked = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // You can implement this if you need to handle disabling the component
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
    this.onTouch(this.isChecked);
  }
}
