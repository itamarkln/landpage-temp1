import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MacosHtmlWindowComponent } from './components/shared/macos-html-window/macos-html-window.component';
import { LogoSliderComponent } from './components/shared/logo-slider/logo-slider.component';
import { AboutComponent } from './components/about/about.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FeatherIconsModule } from './common/modules/feather-icons/feather-icons.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesComponent } from './components/services/services.component';
import { MoveToContactComponent } from './components/move-to-contact/move-to-contact.component';
import { OurSpecialismComponent } from './components/our-specialism/our-specialism.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { ParticlesComponent } from './components/shared/particles/particles.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MacosHtmlWindowComponent,
    AboutComponent,
    LogoSliderComponent,
    ServicesComponent,
    MoveToContactComponent,
    OurSpecialismComponent,
    ContactUsComponent,
    ParticlesComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    FeatherIconsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
