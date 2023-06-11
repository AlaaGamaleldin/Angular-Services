import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

const routes: Routes = [
    {path: 'products', component: ProductsComponent},
    {path: 'products' + '/:id', component: ProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
