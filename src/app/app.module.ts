import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


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
import {ProductsService} from "./products/products.service";
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';

const appRoutes : Routes =[
  {path:'', component: HomeComponent},
  {path:'About', component: AboutComponent},
  {path:'Categories', component:CategoriesComponent },
  {path:'Notifications', component:NotificationsComponent},
  {path:'MyFavorites', component:MyFavoritesComponent}
];

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
    MyFavoritesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
