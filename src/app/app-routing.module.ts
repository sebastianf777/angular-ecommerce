import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) }]; // This must exist to define future routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }