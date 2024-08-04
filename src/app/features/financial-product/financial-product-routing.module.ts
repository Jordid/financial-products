import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialProductsContainerComponent } from './components/financial-products-container/financial-products-container.component';
import { CreateFinancialProductContainerComponent } from './components/create-financial-product-container/create-financial-product-container.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialProductsContainerComponent,
    canActivate: [],
  },
  {
    path: 'create',
    component: CreateFinancialProductContainerComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule],
})
export class FinancialProductRoutingModule {}
