import { Injectable } from '@angular/core';
import {product} from "./products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  private products: product[] = [
    new product('product 1', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123),
    new product('product 2', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123),
    new product('product 3', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123),
    new product('product 4', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123),
  ];

  getProducts() {
    return this.products.slice();
  }
}
