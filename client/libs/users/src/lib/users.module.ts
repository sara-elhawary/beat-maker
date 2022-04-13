//import { ErrPageComponent } from './../../../../apps/beat-maker/src/app/shared/err-page/err-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http'; 

export const usersRoutes: Route[] =[
  {path: 'login', component:LoginComponent},
  {path: 'register', component:SignUpComponent} 
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes),HttpClientModule,ReactiveFormsModule],
  exports: [LoginComponent,SignUpComponent],
  declarations: [
    LoginComponent,
    SignUpComponent
  ]
})
export class UsersModule {}
