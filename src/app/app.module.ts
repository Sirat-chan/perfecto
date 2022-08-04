import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TrendingProductsComponent } from './home/trending-products/trending-products.component';
import { RecentProductsComponent } from './home/recent-products/recent-products.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrendingProductsComponent,
    RecentProductsComponent,
    CarouselComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
