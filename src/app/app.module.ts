import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
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
import {productsService} from "./products/products.service";
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";



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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    RouterModule.forRoot(appRoutes),
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
