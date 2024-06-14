import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpBaseService) {}

  public async RelatorioVendasAnuncio(dataInicial, dataFinal): Promise<any> {
    const response = await this.http.get(
      'anuncio/RelatorioVendasAnuncio?dataInicial=' +
        dataInicial.toISOString() +
        '&dataFinal=' +
        dataFinal.toISOString()
    );
    return response;
  }
}
