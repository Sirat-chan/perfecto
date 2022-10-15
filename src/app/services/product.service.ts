import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../products/product.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  public getProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/products")
  }

  public getRecentProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/products"+"/recent")
  }
  public getTopRatedProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/products"+"/toprated")
  }

  public getCategories():Observable<Array<any>>{
    return this.http.get<Array<any>>(environment.backendHost+"/categories")
  }
  public searchProducts(keyword : string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/products/search?keyword="+keyword)
  }
  public getProductsByCategory(category : string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/products/search?category="+category)
  }
  public saveProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(environment.backendHost+"/products",product);
  }
  public deleteProduct(id: number){
    return this.http.delete(environment.backendHost+"/products/"+id);
  }

  public addProductToFavorites(product: Product){
    return this.http.post<any>('http://localhost:8085/addProductToFavorites', {
      id:product.id,
      name:product.name
    })
  }

  public getFavoriteProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/favorites")
  }

  public deleteProductFromFavorites(product: Product){
    return this.http.delete<number>(environment.backendHost+`/deleteProductFromFavorites/${product.id}`)
  }
  methodefservicelibchtaadivaleur(valeur: boolean) {

  }
}
