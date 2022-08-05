import {Product} from "./products.model";
import {EventEmitter} from "@angular/core";


export class productsService{
private products: Product[]=[
 new Product('product 1', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123 )
];
getproducts(){
return this.products.slice();
}
}
