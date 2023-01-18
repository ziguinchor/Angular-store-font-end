import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'list-products', pathMatch:'full' },
  { path:'list-products', component:ProductsComponent },
  { path:'detail/:id', component: DetailProductComponent },
  { path:'cart', component: CartComponent },
  { path:'payment', component: PaymentComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
