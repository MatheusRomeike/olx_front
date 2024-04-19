import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpBaseService) { }

  public async cadastrar(data) {
    const response = await this.http.post('usuario/cadastrar', data);
    console.log(response);
    return response;
    
  }
}
