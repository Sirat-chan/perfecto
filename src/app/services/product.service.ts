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
  public searchProducts(keyword : string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/products/search?keyword="+keyword)
  }
  public saveProduct(customer: Product):Observable<Product>{
    return this.http.post<Product>(environment.backendHost+"/products",customer);
  }
  public deleteProduct(id: number){
    return this.http.delete(environment.backendHost+"/products/"+id);
  }

}
