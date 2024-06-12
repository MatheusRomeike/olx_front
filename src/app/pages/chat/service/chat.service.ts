// src/pages/chat/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://suaapi.com/mensagens'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getMessages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
