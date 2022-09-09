import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Product} from "../../products/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css']
})
export class RecentProductsComponent implements OnInit {
  products$!: Observable<Array<Product>>;
  errorMessage!: string;


  constructor(private productService: ProductService,) { }

  ngOnInit(): void {
    this.fetchProducts()
  }
  fetchProducts() {
    this.products$ = this.productService.getRecentProducts().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
    console.log(this.products$)
  }
}
