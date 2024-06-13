import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpBaseService) {}

  public async Add(dados): Promise<any> {
    const response = await this.http.post('anuncio/Add', dados);
    return response;
  }

  public async AddFotos(dados): Promise<any> {
    const response = await this.http.post('anuncio/AddFotos', dados);
    return response;
  }

  public async Update(dados){
    const response = await this.http.patch('anuncio/Update', dados);
    return response;
  }

  public async LoadById(id, usuarioId): Promise<any> {
    var url ='anuncio/LoadById?anuncioId='+ id + '&usuarioId=' + usuarioId
    const response = await this.http.get(url);
    return response;
  }

  public async LoadCategorias(): Promise<any> {
    var url ='anuncio/LoadCategorias'
    const response = await this.http.get(url);
    return response;
  }
}
