import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../products/product.model";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit {
  products$!: Observable<Array<Product>>;
  errorMessage!: string;
  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products$ = this.productService.getFavoriteProducts()
  }

}
