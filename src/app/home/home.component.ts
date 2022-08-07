import { Component, OnInit } from '@angular/core';
import {Product} from "../products/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // @ts-ignore
  products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
