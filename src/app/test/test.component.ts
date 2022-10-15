import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../products/product.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() product!: Product;
  data="abc";
  // @Input() index!: number;
  arr: any[] = [];
  index:number = -1;
  constructor(private router: Router) {     this.arr = [1, 2, 3, 4, 5];
  }
  ngOnInit(): void {
  }

  onClickItem(index: number) {
    //console.log(index);
    this.index = index;
  }

  onLoadLogin() {
    this.router.navigate(['/login'])
  }

  onSearch() {
    this.router.navigate(['/search' , this.data])
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value)
    let kw=value.search;
    console.log(kw)

  }
}
