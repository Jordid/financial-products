import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialProductContainerComponent } from './components/financial-product-container/financial-product-container.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialProductContainerComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule],
})
export class ProductsRoutingModule {}
