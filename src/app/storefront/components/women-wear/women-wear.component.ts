import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interface/product';

@Component({
  selector: 'ecom-women-wear',
  templateUrl: './women-wear.component.html',
  styleUrls: ['./women-wear.component.scss']
})
export class WomenWearComponent implements OnInit {

  pageTitle: string = "WOMEN COLLECTION";
  productsList : Product[] = [];
  constructor(private readonly route : ActivatedRoute , private readonly router: Router) { }

  ngOnInit(){
    this.route.data.subscribe(data =>{
     this.productsList = data.womenProductsList;
    })
  }

  viewProduct(productId: String){
    this.router.navigateByUrl('product/'+ productId);
  }
}
