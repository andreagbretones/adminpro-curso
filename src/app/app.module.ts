import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { APP_ROUTES } from './app-routes';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [AppComponent, NopagefoundComponent,SidebarComponent,HeaderComponent, PagesComponent],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
