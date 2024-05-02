import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ToastrMessages } from 'src/app/shared/models/toastr-messages';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile-root',
  templateUrl: './profile-root.component.html',
  styleUrl: './profile-root.component.scss',
})
export class ProfileRootComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private helperService: HelperService
  ) {}

  form: FormGroup = this.buildForm();
  fotoPerfil = [];

  buildForm() {
    return new FormGroup({
      nome: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  async ngOnInit() {
    await this.ObterAsync();
  }

  @Loading(null, true)
  async ObterAsync() {
    let dados = await this.profileService.ObterAsync();
    this.form.patchValue(dados);
    if (dados.foto)
      this.fotoPerfil = [
        this.helperService.base64ToFile(dados.foto, 'Foto de perfil'),
      ];
  }

  @Loading(
    {
      Sucesso: new ToastrMessages({
        Titulo: 'Perfil atualizado',
      }),
    },
    true
  )
  async AtualizarAsync() {
    let formData = new FormData();

    let dados = {
      ...this.form.value,
      foto: this.fotoPerfil.length > 0 ? this.fotoPerfil[0] : null,
    };

    for (let key in dados) {
      formData.append(key, dados[key]);
    }

    await this.profileService.AtualizarAsync(formData);
    await this.ObterAsync();
  }
}
