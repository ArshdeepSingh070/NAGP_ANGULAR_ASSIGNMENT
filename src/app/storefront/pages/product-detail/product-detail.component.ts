import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interface/product';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'ecom-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'PRODUCT DETAILS';
  productId: string = '';
  productsList: Product[] = [];
  isProductAdded: string = '';
  product?: Product;
  constructor(
    private readonly route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.productsList = data.productsList;
      this.route.params.subscribe((params) => {
        var found = this.productsList.filter(
          (product) => product.id == params['productId']
        );
        if (found.length > 0) {
          this.product = found[0];
        }
      });
    });
  }

  /**
   * Adds to cart
   * @param productToAdd
   */
  addToCart(productToAdd: Product): void {
    this.cartService.addToCart(productToAdd);
    this.isProductAdded = 'Yes';
  }
}
