import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Product} from "../../products/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent implements OnInit {

  products$!: Observable<Array<Product>>;
  errorMessage!: string;


  constructor(private productService: ProductService,) { }

  ngOnInit(): void {
    this.fetchProducts()
  }
  fetchProducts() {
    this.products$ = this.productService.getTopRatedProducts().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
    console.log(this.products$)
  }

}
