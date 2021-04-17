import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component'
import { CartdetailsComponent } from './cartdetails/cartdetails.component'
import { SellerComponent } from './seller/seller.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { LogoutComponent } from './logout/logout.component'
import { AuthguardService } from './authguard.service';

const routes: Routes = [

  {
    path:'products', component:ProductsComponent , canActivate:[AuthguardService]
  },

  {
    path: 'productdetail/:id', component:ProductdetailsComponent , canActivate:[AuthguardService]
  },

  {
    path: 'cartlst', component:CartdetailsComponent, canActivate:[AuthguardService]
  },

  {
    path: 'seller', component:SellerComponent, canActivate:[AuthguardService]
  },

  {
    path: 'loginForm', component:LoginFormComponent
  },

  {
    path: 'logout', component:LogoutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
