import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { StorefrontRoutingModule } from './storefront.routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { GenderBasedComponent } from './components/gender-based/gender-based.component';

const components = [
  LoginComponent,
  ProductListComponent,
  ProductDetailComponent,
  CartComponent,
  CheckoutComponent,
  MainPageComponent,
  PageNotFoundComponent,
  NavBarComponent,
  HomePageComponent,
  GenderBasedComponent,
  OrderConfirmationComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedModule,
    StorefrontRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
  ],
  exports: [components],
})
export class StorefrontModule {}
