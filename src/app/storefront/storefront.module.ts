import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { StorefrontRoutingModule } from './storefront.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const components = [
    LoginComponent,
    SearchComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    MainPageComponent,
    PageNotFoundComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedModule,
    StorefrontRoutingModule
  ],
  exports: [
    components
  ]
})
export class StorefrontModule { }
