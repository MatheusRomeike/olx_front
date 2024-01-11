import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthJwtService {
  nameSaveToken: string = 'jwt';

  constructor(private router: Router) {}

  public set token(token: string) {
    localStorage.setItem(`${this.nameSaveToken}`, token);
  }

  public get token(): string {
    return localStorage.getItem(`${this.nameSaveToken}`) as string;
  }

  get tokenDecode() {
    return jwtDecode(this.token);
  }

  get logged() {
    return this.token?.length > 0;
  }

  logout() {
    this.removeToken();
    this.router.navigate(['/login']);
  }

  removeToken() {
    localStorage.removeItem(`${this.nameSaveToken}`);
  }
}
