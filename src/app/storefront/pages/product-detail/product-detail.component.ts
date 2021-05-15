import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interface/product';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'ecom-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "PRODUCT DETAILS"
  product: any;
  isProductAdded: string = '';
  constructor(private readonly route : ActivatedRoute , private cartService : CartService) { }

  ngOnInit(){
    this.route.data.subscribe(data => {
      console.log(data);
      this.product = data.product;
    })

  }

  addToCart(productToAdd : Product): void {
    this.cartService.addToCart(productToAdd);
    this.isProductAdded = 'Yes';
  }

}
