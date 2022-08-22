import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {CategoriesComponent} from "./categories/categories.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {MyFavoritesComponent} from "./my-favorites/my-favorites.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ProductsItemComponent} from "./products/products-item/products-item.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ProductInfopageComponent} from "./products/product-infopage/product-infopage.component";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'myfavorites', component: MyFavoritesComponent},
  {path: 'products/search', component: ProductsComponent},
  {path: 'product/:id', component: ProductInfopageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
