import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpBaseService) { }

  public async cadastrar(data) {
    console.log(data);
    
    const response = await this.http.post('usuario/Add', data);
    console.log(response);
    return response;  
  }

  public async login(data) {
    console.log(data);

    const response = await this.http.post('usuario/Login', data);
    console.log(response);
    return response; 
  }
}
