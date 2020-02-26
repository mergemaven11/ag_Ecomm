import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './products/cart/cart.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent }
    ]
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: 'cart', component: CartComponent }]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'products', component: AdminProductsComponent },
      { path: 'users', component: AdminUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
