import {Component, Input, OnInit} from '@angular/core';
import{Product} from "../product.model";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product!: Product;

  @Input() index!: number;

  constructor() {
  }

  ngOnInit(): void {

  }
}
