import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCategoriesComponent } from './components/category/product-categories/product-categories.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout/logout.component';
import { OrdercatergorypageComponent } from './components/order/ordercatergorypage/ordercatergorypage.component';
import { ProductComponent } from './components/product/product.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'product-categories',
    component: ProductCategoriesComponent,
    children: [{ path: '', redirectTo: 'product', pathMatch: 'full' }],
  },

  {
    component: SignupComponent,
    path: 'signup',
  },

  {
    component: ProductComponent,
    path: 'product-categories/product',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: OrdercatergorypageComponent,
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
    component: ProductComponent,
    path: 'product',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
