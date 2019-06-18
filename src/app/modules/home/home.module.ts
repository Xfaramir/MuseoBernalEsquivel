import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing/landing.component";
import { HeaderComponent } from "./landing/header/header.component";
import { ContentComponent } from "./landing/content/content.component";
import { FooterComponent } from './landing/footer/footer.component';

@NgModule({
  declarations: [LandingComponent, HeaderComponent, ContentComponent, FooterComponent],
  imports: [CommonModule],
  exports: [LandingComponent, HeaderComponent]
})
export class HomeModule {}
