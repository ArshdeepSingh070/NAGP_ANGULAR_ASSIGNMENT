import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsResolver } from './resolver/products.resolver';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { GenderBasedComponent } from './components/gender-based/gender-based.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
    resolve: {
      productsList: ProductsResolver,
    },
  },
  {
    path: 'products/:gender',
    component: GenderBasedComponent,
    resolve: {
      genderBasedProductsList: ProductsResolver,
    },
  },
  {
    path: 'product/:productId',
    component: ProductDetailComponent,
    resolve: {
      productsList: ProductsResolver,
    },
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    component: CartComponent,
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    component: CheckoutComponent,
  },
  {
    path: 'orderConfirmation',
    canActivate: [AuthGuard],
    component: OrderConfirmationComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorefrontRoutingModule {}
