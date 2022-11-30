import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ProductCategoriesComponent } from './components/category/product-categories/product-categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartpageComponent } from './components/cart/cartpage/cartpage.component';
import { OrdercatergorypageComponent } from './components/order/ordercatergorypage/ordercatergorypage.component';
import { OrderspecificpageComponent } from './components/order/orderspecificpage/orderspecificpage.component';
import { LogoutComponent } from './components/logout/logout/logout.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProductCategoriesComponent,
    CartpageComponent,
    OrdercatergorypageComponent,
    OrderspecificpageComponent,
    LogoutComponent,
    SpinnerComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
