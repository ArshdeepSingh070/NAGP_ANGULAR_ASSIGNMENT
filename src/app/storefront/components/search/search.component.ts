import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interface/product';
import { ProductService } from 'src/app/core/service/product.service';
import { ProductsResolver } from '../../resolver/products.resolver';

@Component({
  selector: 'ecom-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: any;
  products : Product[] = [];

  constructor(private productService :  ProductService) { }

  ngOnInit(){

    // this.productService.getProducts()
    // .subscribe(allProducts => {
    //     this.myGridOptions.rowData = allProducts as products[]
    // })
  }

}
