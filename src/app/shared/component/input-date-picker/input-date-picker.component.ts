import {
  AfterViewInit,
  Component,
  Host,
  Input,
  OnInit,
  Optional,
  SkipSelf,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import * as moment from 'moment';
import { conformToMask } from 'text-mask-core';
import { applyColumn } from '../../utils/form-utils';
import { BaseCustomInputComponent } from '../base-custom-input/base-custom-input.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputDatePickerComponent),
  multi: true,
};

export const CUSTOM_INPUT_FORM_GROUP: any = {
  provide: ControlContainer,
  useExisting: FormGroupDirective,
};

@Component({
  selector: '[input-date-picker]',
  templateUrl: './input-date-picker.component.html',
  styleUrls: ['./input-date-picker.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  viewProviders: [CUSTOM_INPUT_FORM_GROUP],
})
export class InputDatePickerComponent
  extends BaseCustomInputComponent
  implements OnInit, AfterViewInit
{
  @Input() columnSize = 3;
  @Input() label = '';
  @Input() disabled: boolean;
  @Input() id: string = '';
  @Input() placeholder: string = 'dd/mm/aaaa';
  @Input() formControl: AbstractControl | null = null;

  valueDisplay: any;
  required = false;

  constructor(
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer
  ) {
    super();
  }

  valueChange(event) {
    let dia = event.day.toString().padStart(2, '0');
    let mes = event.month.toString().padStart(2, '0');
    let ano = event.year;

    let value = {
      target: {
        value: `${dia}/${mes}/${ano}`,
      },
    };

    this.applyMaskAndUpdateValue({
      target: {
        value: `${dia}/${mes}/${ano}`,
      },
    });
  }

  ngOnInit() {
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

    if (this.disabled === undefined) {
      this.disabled = false;
    }

    this.checkValidations();
  }

  checkValidations() {
    if (!this.formControl || !this.formControl.validator) return;

    const validator = this.formControl!!.validator({} as AbstractControl);

    if (validator && validator['required']) {
      this.required = true;
    }
  }

  applyMaskAndUpdateValue(event: any) {
    var v = event.target.value;
    const mask = [
      /[0-9]/,
      /[0-9]/,
      '/',
      /[0-9]/,
      /[0-9]/,
      '/',
      /[1-9]/,
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
    ];
    var convert = conformToMask(v, mask, { guide: false }).conformedValue;
    event.target.value = convert;

    if (convert.length == 10) {
      const date = moment(convert, 'DD/MM/YYYY');
      this.writeValue(date.toDate());
    }
  }

  override writeValue(value) {
    if (value) {
      const date = new Date(value);
      this.valueDisplay = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      } as any;
      this.onChange(value);
    } else {
      try {
        this.valueDisplay = null;
        this.onChange(null);
      } catch (e) {}
    }
  }

  updateTouched() {
    if (this.formControl) this.formControl.markAsTouched();
  }

  blur(event) {
    this.updateTouched();
    if (event.target.value.length < 10) {
      this.writeValue(null);
      this.valueDisplay = null;
      event.target.value = '';
    } else {
      this.writeValue(event.target.value);
    }
  }

  ngAfterViewInit(): void {
    applyColumn(this.id, this.columnSize);
  }
}
