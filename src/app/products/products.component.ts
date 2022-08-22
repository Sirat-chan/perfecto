import {Component, OnInit, ViewChild} from '@angular/core';

import {catchError, Observable, throwError} from "rxjs";
import { NgForm} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "./product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Array<Product>>;
  errorMessage!: string;
  kw!: string;

// @ViewChild('f') searchForm! : NgForm;
  constructor(
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.kw = queryParams['keyword'];
          console.log(this.kw)
        }
      );
    this.fetchProducts()
  }

  onSubmit(form: NgForm) {
    console.log(form)
    const value = form.value;
    console.log(value)
    this.kw = value.search;
    this.router.navigate(['/products/search'], {queryParams: {keyword: this.kw}})
    this.fetchProducts()
  }

  fetchProducts() {
    this.products$ = this.productService.searchProducts(this.kw).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
    console.log(this.products$)
  }

}
