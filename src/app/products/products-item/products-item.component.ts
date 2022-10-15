import {Component, Input, OnInit} from '@angular/core';
import{Product} from "../product.model";
import {ProductService} from "../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {data} from "autoprefixer";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  favProducts$!: Observable<Array<Product>>;
  @Input() product!: Product;
  @Input() index!: number;
  errorMessage!: string;
  status!: string;

  constructor(private productService: ProductService,private http:HttpClient) {
  }

  ngOnInit(): void {
    this.getFavProducts();
  }
  getFavProducts(){
     this.productService.getFavoriteProducts()
    .subscribe( (data)=>{
      data.every(prod=>{
        if(prod.id==this.product.id){
          this.product.isFavorite=true;
          return false;
        }
        else this.product.isFavorite=false;
        return true;
      })
    })

  }

  counter(i: number) {
    return new Array(i);
  }

  onFavorite() {
    if (!this.product.isFavorite){
      this.productService.addProductToFavorites(this.product).subscribe(data => {
        console.log(data)
        this.product = data;
        this.product.isFavorite=true;
        console.log(this.product)
      })
      return;
    }
    // this.productService.deleteProductFromFavorites(this.product);
    console.log(environment.backendHost+`/deleteProductFromFavorites/${this.product.id}`)

    this.productService.deleteProductFromFavorites(this.product)
      .subscribe({
        next: data => {
          this.getFavProducts();
          this.product.isFavorite=false;
          console.log(data)
          this.status = 'Delete successful';
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      });

    }


  onRemoveFromFavorite() {
    this.productService.deleteProductFromFavorites(this.product)
  }
}
