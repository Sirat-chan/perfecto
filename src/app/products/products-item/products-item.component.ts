import {Component, Input, OnInit} from '@angular/core';
import{product} from "../products.model";
import {ProductsService} from "../products.service";
import {ProductServiceService} from "../product-service.service";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
// @ts-ignore
  @Input() product : product;
  // @ts-ignore
  @Input() index: number;
  constructor(private productsService: ProductServiceService) { }

  ngOnInit(): void {

  }

}
