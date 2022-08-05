import { Component, OnInit } from '@angular/core';
import {product} from "./products.model";
import {ProductsService} from "./products.service";
import {ProductServiceService} from "./product-service.service";
import {Product} from "./products.model";
import {productsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
// @ts-ignore
  products: product[];
  constructor(private productService: ProductServiceService) { }
products: Product[] | undefined;
  constructor(private productService: productsService) { }

  ngOnInit(): void {
  this.products=this.productService.getProducts();
  }

}
