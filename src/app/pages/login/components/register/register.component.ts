import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { LoadingMessages } from 'src/app/shared/models/loading-messages';
import { ToastrMessages } from 'src/app/shared/models/toastr-messages';

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

  @Loading(
    new LoadingMessages({
      Inicio: new ToastrMessages({
        Titulo: 'Registrando usuário',
        Conteudo: 'Por favor, aguarde...',
      }),
    })
  )
  registrar() {}
}
