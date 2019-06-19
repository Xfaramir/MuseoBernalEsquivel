import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing/landing.component";
import { HeaderComponent } from "./skeleton/header/header.component";
import { ContentComponent } from "./landing/content/content.component";
import { FooterComponent } from "./skeleton/footer/footer.component";
import { BannerComponent } from "./skeleton/banner/banner.component";
import { IntroductionComponent } from "./landing/content/introduction/introduction.component";
import { GalleryComponent } from "./landing/content/gallery/gallery.component";
import { OfferservicesComponent } from "./landing/content/offerservices/offerservices.component";
import { TestimonialsComponent } from "./landing/content/testimonials/testimonials.component";
import { ClientsComponent } from "./landing/content/clients/clients.component";
import { PricingComponent } from "./landing/content/pricing/pricing.component";
import { AboutComponent } from "./about/about.component";
import { RouterModule } from "@angular/router";
import { AboutcontentComponent } from "./about/content/aboutcontent.component";
import { ContactusComponent } from './about/content/contactus/contactus.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BannerComponent,
    IntroductionComponent,
    GalleryComponent,
    OfferservicesComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingComponent,
    AboutComponent,
    AboutcontentComponent,
    ContactusComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [LandingComponent, HeaderComponent, AboutComponent]
})
export class HomeModule {}
