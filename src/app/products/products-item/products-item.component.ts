import {Component, Input, OnInit} from '@angular/core';
import{Product} from "../products.model";
import {productsService} from "../products.service";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
// @ts-ignore
  @Input() product : Product;
  constructor(private productsService: productsService) { }

  ngOnInit(): void {
  }


}
