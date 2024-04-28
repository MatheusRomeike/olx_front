import { Component, OnInit } from '@angular/core';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ToastrMessages } from 'src/app/shared/models/toastr-messages';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  form;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    });
  }

  @Loading({
    Sucesso: new ToastrMessages({ Titulo: "Logado!" })
  }, true)
  async login() {
    const formValue = { email: 'aaaa@aaaaaa', senha: 'gabriel123' }
    const response = await this.loginService.login(formValue);
  }
}
