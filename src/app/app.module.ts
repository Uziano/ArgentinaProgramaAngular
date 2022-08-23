import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogosComponent } from './componentes/logos/logos.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    RedesComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
