import {Product} from "./product.model";
import {EventEmitter} from "@angular/core";


export class ProductsService{
private products: Product[]=[
 new Product('product 1', '', 1234, true, 123 ),
 new Product('product 2', '', 1234, true, 123 ),
  new Product('product 3', '', 1234, true, 123 ),
  new Product('product 4', '', 1234, true, 123 )
];
getProducts(){
return this.products.slice();
}
}
