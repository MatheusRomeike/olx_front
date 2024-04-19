import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Confirmable } from 'src/app/shared/decorators/confirmable.decorator';
import { ConfirmableType } from 'src/app/shared/enums/confirmable-type.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor() {}
  form;

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dataNascimento: new FormControl('', [Validators.required]),
    });
  }

  @Confirmable(
    'Você tem certeza que deseja salvar?',
    () => true,
    ConfirmableType.Confirmar
  )
  teste() {}
}
