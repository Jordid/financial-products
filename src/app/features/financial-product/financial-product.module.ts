import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiMoreActionsButtonComponent } from '../../ui/components/buttons/more-actions-button/more-actions-button.component';
import { UiFooterTableComponent } from '../../ui/components/tables/footer-table/footer-table.component';
import { CreateFinancialProductComponent } from './components/create-financial-product/create-financial-product.component';
import { FinancialProductsContainerComponent } from './components/financial-products-container/financial-products-container.component';
import { FinancialProductsTableComponent } from './components/financial-products-table/financial-products-table.component';
import { FinancialTableSkeletonComponent } from './components/financial-table-skeleton/financial-table-skeleton.component';
import { FinancialProductRoutingModule } from './financial-product-routing.module';

@NgModule({
  declarations: [
    CreateFinancialProductComponent,
    FinancialProductsContainerComponent,
    FinancialProductsTableComponent,
    FinancialTableSkeletonComponent,
  ],
  imports: [
    CommonModule,
    FinancialProductRoutingModule,
    UiFooterTableComponent,
    UiMoreActionsButtonComponent,
  ],
})
export class FinancialProductModule {}
