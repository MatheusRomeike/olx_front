import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Host,
  Input,
  OnInit,
  Optional,
  Output,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { applyColumn } from '../../utils/form-utils';

@Component({
  selector: '[input-checkbox]',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true,
    },
  ],
})
export class InputCheckboxComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @ViewChild('input') input: ElementRef | undefined;
  @Input() columnSize: number | string = 3;
  @Input() className = '';
  @Input() label = '';
  @Input() id: string = uuidv4();
  @Input() formControlName = '';
  @Output() onKeyDown = new EventEmitter();
  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() disabled = false;
  @Input() value: any = '';
  formControl: AbstractControl | null = null;

  get required(): boolean {
    if (!this.formControl?.validator) return false;

    const validator = this.formControl!!.validator({} as AbstractControl);

    if (validator && validator['required']) {
      return true;
    }

    return false;
  }

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
  }

  ngAfterViewInit(): void {
    applyColumn(this.id, this.columnSize);
  }

  updateValue(rawValue: any) {
    this.onKeyDown.emit(this.value);

    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(value: boolean): void {
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
