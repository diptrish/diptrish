import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandContactComponent } from './component/brand-contact/brand-contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { CompanyFactsComponent } from './component/company-facts/company-facts.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { OurServicesComponent } from './component/our-services/our-services.component';
import { AboutComponent } from './component/about/about.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { TechnologiesComponent } from './component/technologies/technologies.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BrandContactComponent,
    NavbarComponent,
    CarouselComponent,
    CompanyFactsComponent,
    FooterComponent,
    HeroSectionComponent,
    OurServicesComponent,
    AboutComponent,
    ContactUsComponent,
    TechnologiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
