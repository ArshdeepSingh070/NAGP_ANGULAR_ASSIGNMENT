import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Product[] = [];

  constructor(private readonly router: Router) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    console.warn('cart is cleard');
    //this.router.navigate(['/home']);
    //return this.items;
  }

  removeFromCart(product: Product){
    this.items.slice(1);
  }
}
