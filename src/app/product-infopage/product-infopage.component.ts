import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products/products.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-infopage',
  templateUrl: './product-infopage.component.html',
  styleUrls: ['./product-infopage.component.css']
})
export class ProductInfopageComponent implements OnInit {
  private id: any;
   product: any;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private http : HttpClient) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)
    this.http.get(`http://localhost:8085/products/${this.id}`).subscribe(data=>{
      this.product=data;
    }, error => {
      console.log(error)
    })
  }

}
