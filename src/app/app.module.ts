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
import { ProductsComponent } from './products/products.component';
import { ProductsItemComponent } from './products/products-item/products-item.component';
import {ProductsService} from "./products/products.service";
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchComponent } from './products/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import { NavsideComponent } from './navside/navside.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrendingProductsComponent,
    RecentProductsComponent,
    CarouselComponent,
    LoginComponent,
    FooterComponent,
    ProductsComponent,
    ProductsItemComponent,
    AboutComponent,
    CategoriesComponent,
    NotificationsComponent,
    MyFavoritesComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    SearchComponent,
    NavsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
