import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interface/product';
/**
 * Component handle the products based on the gender type
 */
@Component({
  selector: 'ecom-gender-based',
  templateUrl: './gender-based.component.html',
  styleUrls: ['./gender-based.component.scss'],
})
export class GenderBasedComponent implements OnInit {
  pageTitle: string = ' ';
  genderType: string = ' ';
  ProductsList: Product[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.ProductsList = data.genderBasedProductsList;

      this.route.params.subscribe((params) => {
        this.genderType = params['gender'];
      });

      if (this.genderType == 'M') {
        this.pageTitle = 'MENS COLLECTIONS';
      } else if (this.genderType == 'W') {
        this.pageTitle = 'WOMEN COLLECTIONS';
      }
    });
    var validProducts = this.ProductsList.filter(
      (product) => product.gender == this.genderType
    );

    if (validProducts.length > 0) {
      this.ProductsList = validProducts;
    }
  }

  viewProduct(productId: String) {
    this.router.navigateByUrl('product/' + productId);
  }
}
