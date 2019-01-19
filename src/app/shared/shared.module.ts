import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {  TableModule } from 'primeng/table';
import { EchartDirective } from '../directive/echart.directive';

const PRIMENG_MODULES = [
  TableModule
];
const MODULES = [
  ...PRIMENG_MODULES,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];
const DECLARATIONS = [
  EchartDirective
];
const EXPORT_COMPONENTS = [
  EchartDirective
];
@NgModule({
  declarations: DECLARATIONS,
  exports: [...MODULES, EXPORT_COMPONENTS]
})
export class SharedModule { }
