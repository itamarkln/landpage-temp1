import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MacosHtmlWindowComponent } from './components/shared/macos-html-window/macos-html-window.component';
import { AboutComponent } from './components/about/about.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FeatherIconsModule } from './common/modules/feather-icons/feather-icons.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MacosHtmlWindowComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    FeatherIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
