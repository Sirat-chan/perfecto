import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {Product} from "../product.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  categories$!: Observable<Array<any>>;
  errorMessage!: string;
  products$!: Observable<Array<Product>>;
  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories()
    console.log(this.categories$)
  }




}
