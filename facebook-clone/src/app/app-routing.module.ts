import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FacebookGuard } from './guards/facebook.guard';

const routes: Routes = [
  //lazy loaded route, unless we are logged in this home component will not be loaded
  {
    path : '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    canActivate: [FacebookGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
