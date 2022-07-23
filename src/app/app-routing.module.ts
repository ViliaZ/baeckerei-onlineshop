import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { LegalComponent } from './legal/legal.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component: ShopComponent }, 
  {path: 'checkout', component: CheckoutComponent }, 
  {path: 'impressum', component: LegalComponent }, 
  {path: 'kontakt', component: ContactComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
