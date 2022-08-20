import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {MyFavoritesComponent} from "./my-favorites/my-favorites.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {TrendingProductsComponent} from "./home/trending-products/trending-products.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {SearchComponent} from "./products/search/search.component";

const appRoutes: Routes=[
  {path:"trendingproducts" , component: TrendingProductsComponent},
  {path:"" , component:HomeComponent},
  {path:"products" , component:ProductsComponent},
  {path:"myfavorites" , component:MyFavoritesComponent},
  {path:"about" , component:AboutComponent},
  {path:"contactus" , component:ContactUsComponent},
  {path:"login", component:LoginComponent},
  {path:"search" , component:SearchComponent}

];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{
}
