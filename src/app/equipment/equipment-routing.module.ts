import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';
import { EquipmentSearchComponent } from './equipment-search/equipment-search.component'
import { EquipmentImportComponent } from '../equipment/equipment-import/equipment-import.component'
const route: Routes = [
  {path: '', component: EquipmentViewComponent},
  {path: 'import', component: EquipmentImportComponent},
  {path: 'search', component: EquipmentSearchComponent}
  ];
@NgModule({
  imports: [RouterModule.forChild(route),
  ],
  exports: [RouterModule]
})
export class EquipmentRoutingModule {

}
