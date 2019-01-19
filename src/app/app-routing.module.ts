import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const route: Routes = [

  {path: '', redirectTo:  'index/equipment', pathMatch: 'full'},
  {
      path: 'login',
      loadChildren: '../app/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [HomeModule, RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
