import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { AuthGuard } from './authentication/auth.guard';
const routes: Routes = [
  {
    component : HomeComponent,
    path : ''
  },
  {
    component : SellerAuthComponent,
    path : 'seller-auth'
  },
  {
    component : SellerHomeComponent,
    path : 'seller-home',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
