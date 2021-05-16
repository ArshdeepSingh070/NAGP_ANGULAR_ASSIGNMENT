import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  /**
   * determines whether cart has items or not
   */
  itemsInCart = new BehaviorSubject<boolean>(false);

  constructor(private readonly router: Router) {}

  addToCart(product: Product) {
    this.items.push(product);
    this.itemsInCart.next(true);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsInCart.next(false);
    console.warn('cart is cleard');
  }

  removeFromCart(product: Product) {
    this.items.slice(1);
  }
}
