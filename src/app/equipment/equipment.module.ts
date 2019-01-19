import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';
import { EquipmentSearchComponent } from './equipment-search/equipment-search.component';
import { EquipmentImportComponent } from './equipment-import/equipment-import.component';

@NgModule({
  declarations: [EquipmentViewComponent, EquipmentSearchComponent, EquipmentImportComponent],
  imports: [
    SharedModule,
    EquipmentRoutingModule
  ]
})
export class EquipmentModule { }
