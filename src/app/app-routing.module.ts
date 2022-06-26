import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { TechnologiesPageComponent } from './pages/technologies-page/technologies-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';

const routes = [
    { path: '', component: AboutMePageComponent },
    { path: 'about-me', component: AboutMePageComponent },
    { path: 'technologies', component: TechnologiesPageComponent },
    { path: 'portfolio', component: PortfolioPageComponent },
    { path: 'testimonials', component: TestimonialsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

