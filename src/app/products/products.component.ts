import { Component, OnInit } from '@angular/core';
import {Product} from "./products.model";
import {productsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[] | undefined;
  constructor(private productService: productsService) { }

  ngOnInit(): void {
  this.products=this.productService.getproducts();
  }

}
