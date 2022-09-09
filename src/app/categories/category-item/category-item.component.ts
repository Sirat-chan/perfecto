import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../products/product.model";
import {Category} from "../category.model";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() category!: Category;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
