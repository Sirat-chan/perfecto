import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {TrendingProductsComponent} from './home/trending-products/trending-products.component';
import {RecentProductsComponent} from './home/recent-products/recent-products.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import {ProductsComponent} from './products/products.component';
import {ProductsItemComponent} from './products/products-item/products-item.component';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from './about/about.component';
import {CategoriesComponent} from './categories/categories.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {MyFavoritesComponent} from './my-favorites/my-favorites.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProductInfopageComponent } from './products/product-infopage/product-infopage.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestComponent } from './test/test.component';
import { FiltersComponent } from './products/filters/filters.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import {AuthInterceptor} from "./login/auth.interceptor";
import {AuthImagePipe} from "./shared/auth-image.pipe";
import {ProfileComponent} from "./profile/profile.component";
import 'boxicons';


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
    ProductInfopageComponent,
    TestComponent,
    FiltersComponent,
    CategoryItemComponent,
    AuthImagePipe,
    ProfileComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        MatSidenavModule,
        ReactiveFormsModule,
        FormsModule,

    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
