import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/interface/product';
import { ProductService } from 'src/app/core/service/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productService.getProducts();
  }
}
