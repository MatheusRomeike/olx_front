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

  // {
  //   "sortBy": "title",
  //   "sortDirection": "asc",
  //   "category": "edrfcrfcfrcrfccf",
  //   "minPrice": "1000",
  //   "maxPrice": "2000"
  // } 

  public async List(parametros?): Promise<any> {
    // console.log(parametros);
    const {
      sortBy,
      sortDirection,
      category,
      minPrice,
      maxPrice
    } = parametros;
    
    let url = 'anuncio/List?'

    const mapOrderFields = new Map([
      ['title', 'Titulo'],
      ['price', 'Preco']
    ])

    if (sortBy && sortDirection) {
      const direction = sortDirection === 'asc' ? 0 : 1
      url += `${mapOrderFields.get(sortBy)}=${direction}&`      
    }

    if (minPrice) url += `PrecoMin=${minPrice}&`
    if (maxPrice) url += `PrecoMax=${maxPrice}&`

    console.log(url);
    

    const response = await this.http.get(url);
    return response;
  }
}