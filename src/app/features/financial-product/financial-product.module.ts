import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiFooterTableComponent } from '../../ui/components/tables/footer-table/footer-table.component';
import { CreateFinancialProductComponent } from './components/create-financial-product/create-financial-product.component';
import { FinancialProductsContainerComponent } from './components/financial-products-container/financial-products-container.component';
import { FinancialProductsTableComponent } from './components/financial-products-table/financial-products-table.component';
import { FinancialProductRoutingModule } from './financial-product-routing.module';

@NgModule({
  declarations: [
    CreateFinancialProductComponent,
    FinancialProductsContainerComponent,
    FinancialProductsTableComponent,
  ],
  imports: [
    CommonModule,
    FinancialProductRoutingModule,
    UiFooterTableComponent,
  ],
})
export class FinancialProductModule {}
