import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interface/product';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'ecom-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  pageTitle: string = 'CART PAGE';
  totalPrice?: number;
  hasProduct: boolean = false;
  items = this.cartService.getItems();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.items.length > 0) {
      this.hasProduct = true;
      this.totalPrice = this.items
        .map((prod) => +prod.price)
        .reduce((acc, current) => {
          return acc + current;
        });
    }
  }
  public removeProduct(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
