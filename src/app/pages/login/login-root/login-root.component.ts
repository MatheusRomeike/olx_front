import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthJwtService } from 'src/app/shared/services/auth-jwt.service';

@Component({
  selector: 'app-login-root',
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.scss'],
})
export class LoginRootComponent implements OnInit {
  constructor(private router: Router, private authJwtService: AuthJwtService) { }

  ngOnInit() {
    this.authJwtService.removeToken();
  }

  activeId = 'login';

  redirectTo(tab: 'register' | 'login') {
    this.activeId = tab;
  }

  login() {
    this.router.navigate(['/']);
  }
}
