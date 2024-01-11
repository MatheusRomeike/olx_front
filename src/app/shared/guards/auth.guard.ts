import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthJwtService } from '../services/auth-jwt.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthJwtService);
  const router = inject(Router);

  if (authService.logged) {
    return true;
  }

  authService.logout();
  return router.createUrlTree(['/login']);
};
