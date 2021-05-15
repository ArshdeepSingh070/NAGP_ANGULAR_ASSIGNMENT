import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interface/product';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'ecom-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  pageTitle: string = "CART PAGE";
  totalPrice : string = "";
  hasProduct : boolean = false;

  constructor(private cartService : CartService) { }

  items = this.cartService.getItems();

  ngOnInit(): void {
    if(this.items.length > 0){
      this.hasProduct = true;
    }
  }



  public removeProduct(product: Product){
    this.cartService.removeFromCart(product);
  }

  // Have a for loop here to calculate the total price

}
