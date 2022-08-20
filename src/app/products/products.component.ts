import { Component, OnInit } from '@angular/core';

import {ProductsService} from "./products.service";
import {HttpClient} from "@angular/common/http";
import {data} from "autoprefixer";
import {catchError, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {Product} from "./product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$! : Observable<Array<Product>>;
  errorMessage!: string;
  constructor(private productsService: ProductsService,
              private productService: ProductService,
              private router: Router
  ) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    console.log(form)
    const value = form.value;
    console.log(value)
    let kw=value.search;
    console.log(kw)
    // this.router.navigate(['/search'], {queryParams:{keyword: kw}})
    this.products$=this.productService.searchProducts(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
    console.log(this.products$)

  }
}
