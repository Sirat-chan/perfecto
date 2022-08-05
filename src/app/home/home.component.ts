import { Component, OnInit } from '@angular/core';
import {Product} from "../products/products.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 products: Product[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
