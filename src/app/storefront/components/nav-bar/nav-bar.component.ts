import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'ecom-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoggedInUser: boolean = false;
  isItemsInCart: boolean = false;

  constructor(
    private loginService: LoginService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loginService.isLoggedIn.subscribe(
      (value) => (this.isLoggedInUser = value)
    );
    this.cartService.itemsInCart.subscribe(
      (value) => (this.isItemsInCart = value)
    );
  }
}
