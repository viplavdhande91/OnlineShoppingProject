import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AppComponent } from './app.component';
import { CartpageComponent } from './components/cart/cartpage/cartpage.component';
import { ProductCategoriesComponent } from './components/category/product-categories/product-categories.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout/logout.component';
import { OrderspecificpageComponent } from './components/order/orderspecificpage/orderspecificpage.component';
import { ProductComponent } from './components/product/product.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    component: CartpageComponent,
    path: 'cartpage',
  },
  {
    component: SignupComponent,
    path: 'signup',
  },

  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: OrderspecificpageComponent,
    path: 'orderdashboard',
  },
  {
    component: LogoutComponent,
    path: 'logout',
  },

  {
    component: ProductCategoriesComponent,
    path: 'product-categories',
  },

  {
    component: CheckoutComponent,
    path: 'checkout',
  },

  {
    component: ProductComponent,
    path: 'product',
  },

  {
    component: UserComponent,
    path: 'userdashboard',
  },

  { path: '', component: HomeComponent },
  { path: '**', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
