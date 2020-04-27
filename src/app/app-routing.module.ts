import { NgModule } from '@angular/core';
import { AboutusComponent } from './aboutus/aboutus.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AddacartComponent } from './auth/addacart/addacart.component';
import { LaptopComponent } from './laptop1/laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import {AdmintabComponent } from './admin/admintab/admintab.component';
//import {  AuthGuardAdmin } from './auth/auth-guard.admin.service';
//import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {path :'', component: HomeComponent},
  {path : 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent} ,
  {path: 'addacart', component:AddacartComponent},//,canActivate: [AuthGuard]},
  {path: 'laptop', component:LaptopComponent},
  {path: 'mobile', component:MobileComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'admin',component:AdmintabComponent}// ,canActivate :[AuthGuardAdmin]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [] //[AuthGuard]
})
export class AppRoutingModule { }
