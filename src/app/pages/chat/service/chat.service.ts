// src/pages/chat/chat.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpBaseService) {}

  public async List(parametros): Promise<any> {
    const { anuncioId, usuarioId } = parametros;

    return await this.http.get(`Mensagem/chat?anuncioId=${anuncioId}&usuarioInteressadoId=${usuarioId}`)
  }

  public async Create(dados): Promise<any> {
    const response = await this.http.post('Mensagem', dados);
    return response;
  }
}
