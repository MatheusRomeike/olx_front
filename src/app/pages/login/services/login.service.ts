import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';

interface LoginResponse {
  accessToken: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpBaseService) { }

  public async cadastrar(data) {
    return await this.http.post('usuario/Add', data);
  }

  public async login(data): Promise<LoginResponse> {
    return await this.http.post('usuario/Login', data) as Promise<LoginResponse>;
  }
}
