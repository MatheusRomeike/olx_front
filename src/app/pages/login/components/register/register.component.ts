import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ToastrMessages } from 'src/app/shared/models/toastr-messages';
import { Confirmable } from 'src/app/shared/decorators/confirmable.decorator';
import { ConfirmableType } from 'src/app/shared/enums/confirmable-type.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService) { }
  
  @Output() redirectToEvent: EventEmitter<boolean> = new EventEmitter();

  form;

  senhaConfirmarSenhaValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const confirmaSenha = control.value;
    const senha = control.parent?.value?.senha;
    if (senha && confirmaSenha)
      return senha === confirmaSenha ? null : { senhaConfirmarSenha: true };

    return null;
  }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dataNascimento: new FormControl('', [Validators.required]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      confirmaSenha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        this.senhaConfirmarSenhaValidator,
      ]),
    });
  }

  @Confirmable(
    'Deseja realmente cadastrar o usuário?',
    () => true,
    ConfirmableType.Confirmar
  )
  @Loading(
    {
      Sucesso: new ToastrMessages({
        Titulo: 'Usuário cadastrado com sucesso.',
      }),
    },
    true
  )
  async cadastrar() {
    await this.loginService.cadastrar(this.form.value);
    this.redirectToEvent.emit();
  }
}
