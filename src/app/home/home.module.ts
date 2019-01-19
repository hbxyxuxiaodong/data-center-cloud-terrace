import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HomeComponent } from './home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from '../service/module-import-guard';
import { HeaderComponent } from './header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, MainMenuComponent, HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [HttpClientModule]
})
export class HomeModule {
    constructor(@Optional()@SkipSelf()parent: HomeModule) {
       if (parent) {
          throwIfAlreadyLoaded(parent, 'HomeModule');
       }
    }
 }
