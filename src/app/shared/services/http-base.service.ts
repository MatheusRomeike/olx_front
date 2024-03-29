/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  constructor(private httpClient: HttpClient) {}

  getAll(url: string) {
    return firstValueFrom(
      this.httpClient.get(`${environment.hubAutoApiUrl}/${url}`)
    ) as any;
  }

  getById(url: string, id: number) {
    return firstValueFrom(
      this.httpClient.get(`${environment.hubAutoApiUrl}/${url}/${id}`)
    );
  }

  post(url: string, body: any) {
    return firstValueFrom(
      this.httpClient.post(`${environment.hubAutoApiUrl}/${url}`, body)
    );
  }

  put(url: string, body: any) {
    return firstValueFrom(
      this.httpClient.put(`${environment.hubAutoApiUrl}/${url}`, body)
    );
  }

  delete(url: string, id: number) {
    return firstValueFrom(
      this.httpClient.delete(`${environment.hubAutoApiUrl}/${url}/${id}`)
    );
  }
}
