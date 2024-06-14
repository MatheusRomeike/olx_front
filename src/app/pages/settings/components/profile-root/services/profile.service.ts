import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpBaseService) {}

  public async ObterAsync(): Promise<any> {
    const response = await this.http.get('usuario');
    return response;
  }

  public async AtualizarAsync(dados) {
    const response = await this.http.patch('usuario', dados);
    return response;
  }

  public async LoadByUsuario(): Promise<any> {
    const response = await this.http.get('anuncio/LoadByUsuario');
    return response;
  }
}
