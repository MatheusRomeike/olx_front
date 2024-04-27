import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-root',
  templateUrl: './profile-root.component.html',
  styleUrl: './profile-root.component.scss',
})
export class ProfileRootComponent {
  form: FormGroup = this.buildForm();
  fotoPerfil = [];

  buildForm() {
    return new FormGroup({
      nome: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
