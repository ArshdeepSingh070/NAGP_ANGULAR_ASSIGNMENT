import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interface/product';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  isLoggedInUser: string = "";
  productsList: Product[] = [];
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(){
    this.route.data.subscribe(data =>{
      this.productsList = data.productsList;
    })

    this.isLoggedInUser =  JSON.stringify(localStorage.getItem('isLoggedIn'));
  }

  viewProduct(productId: String){
    this.router.navigateByUrl('product/'+ productId);
  }
}
