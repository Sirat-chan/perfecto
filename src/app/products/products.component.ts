import { Component, OnInit } from '@angular/core';
import {Product} from "./product.model";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
// @ts-ignore
  products: Product[];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  this.products=this.productService.getProducts();
  }

}
