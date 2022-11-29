import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout/logout.component';
import { OrdercatergorypageComponent } from './components/order/ordercatergorypage/ordercatergorypage.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    component: SignupComponent,
    path: 'signup',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: OrdercatergorypageComponent,
    path: 'categories',
  },
  {
    component: LogoutComponent,
    path: 'logout',
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
