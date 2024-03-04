import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts-publish-root',
  templateUrl: './accounts-publish-root.component.html',
  styleUrls: ['./accounts-publish-root.component.scss'],
})
export class AccountsPublishRootComponent {
  form;

  generos = [
    {
      value: 'M',
      label: 'Masculino',
    },
    {
      value: 'F',
      label: 'Feminino',
    },
  ];

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      genero: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      vigente: new FormControl(true),
    });
  }
}
