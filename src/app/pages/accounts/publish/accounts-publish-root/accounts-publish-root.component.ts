import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { PublishService } from '../publish.service';

@Component({
  selector: 'app-accounts-publish-root',
  templateUrl: './accounts-publish-root.component.html',
  styleUrls: ['./accounts-publish-root.component.scss'],
})
export class AccountsPublishRootComponent {
  form: FormGroup;

  constructor(private publishService: PublishService) {
    this.form = new FormGroup(
      {
        texto: new FormControl('', [Validators.required]),
        x: new FormControl(false),
        instagram: new FormControl(false),
      },
      { validators: this.atLeastOneCheckedValidator(['x', 'instagram']) }
    );
  }

  async onSubmit() {
    let texto = this.form.get('texto').value;
    if (this.form.get('x').value) {
      await this.publishService.postOnTwitter(texto);
    }
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
