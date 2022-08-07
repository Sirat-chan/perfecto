import {Product} from "./product.model";
import {EventEmitter} from "@angular/core";


export class ProductsService{
private products: Product[]=[
 new Product('product 1', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123 ),
 new Product('product 2', 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop', 1234, true, 123 ),
  new Product('product 3', 'https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/282651000_5057705084347909_3209701363616506463_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lt3AC_wgSD0AX8Z235S&_nc_ht=scontent.ftun14-1.fna&oh=00', 1234, true, 123 ),
  new Product('product 4', 'https://images.unsplash.com/photo-1554995207-c18c203602cb', 1234, true, 123 )
];
getProducts(){
return this.products.slice();
}
}
