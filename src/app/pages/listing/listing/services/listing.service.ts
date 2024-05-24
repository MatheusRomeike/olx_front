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

  public async Update(dados){
    const response = await this.http.patch('anuncio/Update', dados);
    return response;
  }

  public async LoadById(id): Promise<any> {
    var url ='anuncio/LoadById?anuncioId='+ id
    const response = await this.http.get(url);
    return response;
  }
}
