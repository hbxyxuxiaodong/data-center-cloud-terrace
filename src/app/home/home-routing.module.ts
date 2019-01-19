import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
const routes: Routes = [
  {
    path: 'index', canActivate: [], component: HomeComponent,
    canActivateChild: [],
    children: [
      {path: 'equipment', loadChildren: '../equipment/equipment.module#EquipmentModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
