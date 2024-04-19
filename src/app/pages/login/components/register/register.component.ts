import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService) { }

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
      senha: new FormControl('', [Validators.required]),
      confirmaSenha: new FormControl('', [Validators.required, this.senhaConfirmarSenhaValidator]),
    });
  }

  async cadastrar() {
    console.log(this.form.value);
    const response = await this.loginService.cadastrar(this.form.value);
    console.log(response);

  }
}
