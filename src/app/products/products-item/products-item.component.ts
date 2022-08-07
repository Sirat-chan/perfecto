import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  // @ts-ignore
  @Input() product: Product;
  // @ts-ignore
  @Input() index: number;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {

  }
}



