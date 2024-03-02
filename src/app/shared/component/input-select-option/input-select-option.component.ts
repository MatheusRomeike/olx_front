import {
  AfterViewInit,
  Component,
  forwardRef,
  Host,
  Input,
  OnInit,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { applyColumn } from '../../utils/form-utils';

@Component({
  selector: '[input-select-option]',
  templateUrl: './input-select-option.component.html',
  styleUrls: ['./input-select-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectOptionComponent),
      multi: true,
    },
  ],
})
export class InputSelectOptionComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input() formControlName = '';
  @Input() columnSize = 3;
  @Input() placeholder = '';
  @Input() label = '';
  @Input() id: string = '';
  @Input() type = 'text';
  @Input() items = new Array<any>();
  @Input() bindValue = 'value';
  @Input() bindLabel = 'label';
  formControl: AbstractControl | null = null;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;
  value: any = '';

  required = false;

  constructor(
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.formControl = this.controlContainer!!.control!!.get(
          this.formControlName
        );
      } else {
        console.warn(
          'Missing FormControlName directive from host element of the component'
        );
      }
    }

    this.checkValidations();
  }

  updateTouched() {
    if (this.formControl) this.formControl.markAsTouched();
  }

  ngAfterViewInit(): void {
    applyColumn(this.id, this.columnSize);
  }

  checkValidations() {
    if (!this.formControl || !this.formControl.validator) return;

    const validator = this.formControl!!.validator({} as AbstractControl);

    if (validator && validator['required']) {
      this.required = true;
    }
  }

  updateValue(rawValue: any) {
    if (rawValue.target.value) this.value = rawValue.target.value;

    this.onChange(rawValue.target.value);
    this.onTouched();
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
