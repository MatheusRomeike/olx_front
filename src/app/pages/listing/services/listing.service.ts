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

  public async Update(dados) {
    const response = await this.http.patch('anuncio/Update', dados);
    return response;
  }

  public async LoadById(id, usuarioId): Promise<any> {
    var url = 'anuncio/LoadById?anuncioId=' + id + '&usuarioId=' + usuarioId;
    const response = await this.http.get(url);
    return response;
  }

  public async LoadCategorias(): Promise<any> {
    var url = 'anuncio/LoadCategorias';
    const response = await this.http.get(url);
    return response;
  }

  public async AlterarStatus(id, status) {
    const response = await this.http.patch('anuncio/AlterarStatus', {
      anuncioId: id,
      estado: status,
    });
    return response;
  }

  // {
  //   "sortBy": "title",
  //   "sortDirection": "asc",
  //   "category": "edrfcrfcfrcrfccf",
  //   "minPrice": "1000",
  //   "maxPrice": "2000"
  // }

  public async List(parametros?): Promise<any> {
    // console.log(parametros);
    const { sortBy, sortDirection, category, minPrice, maxPrice } = parametros;

    let url = 'anuncio/List?';

    const mapOrderFields = new Map([
      ['title', 'Titulo'],
      ['price', 'Preco'],
    ]);

    if (sortBy && sortDirection) {
      const direction = sortDirection === 'asc' ? 0 : 1;
      url += `${mapOrderFields.get(sortBy)}=${direction}&`;
    }

    if (minPrice) url += `PrecoMin=${minPrice}&`;
    if (maxPrice) url += `PrecoMax=${maxPrice}&`;

    console.log(url);

    const response = await this.http.get(url);
    return response;
  }

  public async getTituloAnuncio(anuncioId): Promise<string> {
    return (await this.http.get(
      'anuncio/GetTituloAnuncio?anuncioId=' + anuncioId
    )) as string;
  }
}
