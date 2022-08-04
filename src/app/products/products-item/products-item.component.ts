import {Component, Input, OnInit} from '@angular/core';
import{product} from "../products.model";
import {productsService} from "../products.service";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
@Input() Product : product | undefined;
  constructor(private productsService: productsService) { }

  ngOnInit(): void {
  }
  onSelected(){
  this.productsService.productSelected.emit(this.Product);
  }

}
