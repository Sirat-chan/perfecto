import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 data="abc";
  constructor(private router: Router) { }

  ngOnInit(): void {
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
