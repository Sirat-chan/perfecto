import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {catchError, Observable, Subscription, throwError} from "rxjs";
import {Product} from "../products/product.model";
import {ProductService} from "../services/product.service";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products!: Observable<Array<Product>>;
  errorMessage!: string;
  @ViewChild('f', {static: false}) slForm!: NgForm;
  showFiller = false;
  isAuthenticated = false;
  private userSub!: Subscription;
  constructor(private router: Router,
              private productService: ProductService,
              private http: HttpClient,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.userSub = this.loginService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onLoadLogin() {
    this.loginService.isLoginMode.next(true);
    this.router.navigate(['/login'])
  }
  onLoadRegister() {
    this.loginService.isLoginMode.next(false);
    this.router.navigate(['/login'])
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    let kw = value.search;
    this.products = this.productService.searchProducts(kw).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

  }
  onLogout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
