import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Category} from "./category.model";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$!: Observable<Array<any>>;
  errorMessage!: string;

  constructor(private productService: ProductService,) {
  }

  ngOnInit(): void {
      this.categories$ = this.productService.getCategories()
      console.log(this.categories$)

  }
}
