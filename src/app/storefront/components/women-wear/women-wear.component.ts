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

    this.route.data.subscribe(data =>{
      this.productsList = data.womenProductsList;
      this.route.params.subscribe((params)=>{
        console.log(params);
        var found = this.productsList.filter(product=> product.id ==params['gender']);
        console.log(found);
        if(found.length>0){
          this.productsList = found;
        }
      });
    })
  }

  viewProduct(productId: String){
    this.router.navigateByUrl('product/'+ productId);
  }
}
