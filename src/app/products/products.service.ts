import {Product} from "./product.model";
import {EventEmitter} from "@angular/core";


export class ProductsService {

  private products: Product[] = [
    new Product('product 1', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123),
    new Product('product 2', 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop', 1234, true, 123),
    new Product('product 3', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123),
    new Product('product 4', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123),
  ];

  getProducts() {
    return this.products.slice();
  }
}
