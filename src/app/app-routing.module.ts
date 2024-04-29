import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './core/layouts/default-layout/default-layout.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/home/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./pages/accounts/accounts.module').then(
            (m) => m.AccountsModule
          ),
      },
    ],
  },
  {
    path: 'login',
    // canDeactivate: [authGuard], impede o user de acessar essa rota logado ?
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
