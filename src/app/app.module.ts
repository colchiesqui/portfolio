import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationMenuComponent } from './header/navigation-menu/navigation-menu.component';
import { NavigationItemComponent } from './header/navigation-menu/navigation-item/navigation-item.component';
import { TechnologiesPageComponent } from './pages/technologies-page/technologies-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationMenuComponent,
    NavigationItemComponent,
    TechnologiesPageComponent,
    PortfolioPageComponent,
    TestimonialsPageComponent,
    AboutMePageComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
