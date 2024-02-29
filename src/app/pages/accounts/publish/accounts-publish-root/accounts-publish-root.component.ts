import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Confirmable } from 'src/app/shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-accounts-publish-root',
  templateUrl: './accounts-publish-root.component.html',
  styleUrls: ['./accounts-publish-root.component.scss'],
})
export class AccountsPublishRootComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup(
      {
        texto: new FormControl('', [Validators.required]),
        x: new FormControl(false),
        instagram: new FormControl(false),
      },
      { validators: this.atLeastOneCheckedValidator(['x', 'instagram']) }
    );
  }

  @Confirmable()
  async onSubmit() {
    let texto = this.form.get('texto').value;
  }

  atLeastOneCheckedValidator(checkedFields: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const isChecked = checkedFields.some(
        (field) => control.get(field)?.value
      );
      return isChecked ? null : { atLeastOneChecked: true };
    };
  }
}
