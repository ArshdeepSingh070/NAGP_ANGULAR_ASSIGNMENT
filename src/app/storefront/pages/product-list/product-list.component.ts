import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interface/product';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  isLoggedInUser: string = '';
  productsList: Product[] = [];
  isItemsInCart: boolean = false;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.productsList = data.productsList;
    });
    this.cartService.itemsInCart.subscribe((value) => {
      this.isItemsInCart = value;
    });
  }

  /**
   * Views product based on
   * @param productId
   */
  viewProduct(productId: String) {
    this.router.navigateByUrl('product/' + productId);
  }
}
