import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialProductsContainerComponent } from './components/financial-products-container/financial-products-container.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialProductsContainerComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule],
})
export class FinancialProductRoutingModule {}
