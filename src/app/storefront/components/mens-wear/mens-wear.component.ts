import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interface/product';

@Component({
  selector: 'ecom-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.scss']
})
export class MensWearComponent implements OnInit {

  pageTitle: string = "MENS COLLECTION";
  productsList: Product[] = [];
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(){
    this.route.data.subscribe(data =>{
      this.productsList = data.menProductsList;
    })
  }

  viewProduct(productId: String){
    this.router.navigateByUrl('product/'+ productId);
  }

}
