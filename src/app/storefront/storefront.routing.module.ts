import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductService } from "../core/service/product.service";
import { LoginComponent } from "./login/login.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductResolver } from "./resolver/product.resolver";
import { ProductsResolver } from "./resolver/products.resolver";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: MainPageComponent,
    children: [
      {
        path: 'products', component: ProductListComponent, resolve: {
          productsList: ProductsResolver
        }
      },
      {
        path: 'products/:productId' , component: ProductDetailComponent, resolve: {
          product: ProductResolver
        }
      }
    ]

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StorefrontRoutingModule{}
