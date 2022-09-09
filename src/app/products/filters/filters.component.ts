import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  categories$!: Observable<Array<any>>;
  errorMessage!: string;

  constructor(private productService: ProductService,) {
  }

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories()
    console.log(this.categories$)
  }

}
