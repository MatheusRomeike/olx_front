import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ToastrMessages } from 'src/app/shared/models/toastr-messages';
import { AuthJwtService } from 'src/app/shared/services/auth-jwt.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private authJwtService: AuthJwtService
  ) {}

  form;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
    });
  }

  @Loading(
    {
      Sucesso: new ToastrMessages({ Titulo: 'Logado!' }),
    },
    true
  )
  async login() {
    const response = await this.loginService.login(this.form.value);
    this.authJwtService.token = response.accessToken;
    localStorage.setItem('nomeUsuario', response.nomeUsuario);
    localStorage.setItem('usuarioId', response.usuarioId);
    this.router.navigate(['/']);
  }
}
