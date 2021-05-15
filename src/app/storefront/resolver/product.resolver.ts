import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/interface/product';
import { ProductService } from 'src/app/core/service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product[]> {

  products : Product[] = [];
  // product: any;
  productId: any;

  constructor(private readonly productService: ProductService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    this.productId = route.paramMap.get('productId');

    // // this.productService.getProducts().subscribe((value)=> {
    // //   this.products = value;
    // //   this.filterProduct(this.products , this.productId);
    // // }
    // // );
    // this.productService.getProducts().toPromise()
   return this.productService.getProducts();
  }

  // filterProduct(products : Product[] , productId : string): Product | undefined{

  //   return products.find(prod => prod.id == productId);
  // }
}
