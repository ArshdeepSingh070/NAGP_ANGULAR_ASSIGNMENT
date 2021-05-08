import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResolver } from 'src/app/storefront/resolver/products.resolver';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_SERVICE_BASE_URL = "/assets/templates";

  constructor(private readonly httpClient : HttpClient) { }

  public getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/products.json`;
    return this.httpClient.get<Product[]>(url);
  }

  public getProduct(productId : String): Observable<Product>{
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/product.json`;
    return this.httpClient.get<Product>(url);
  }
}
