import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRootComponent } from './login-root/login-root.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginRootComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
