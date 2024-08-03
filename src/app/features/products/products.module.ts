import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateFinancialProductComponent } from './components/create-financial-product/create-financial-product.component';
import { FinancialProductContainerComponent } from './components/financial-product-container/financial-product-container.component';
import { FinancialProductsTableComponent } from './components/financial-products-table/financial-products-table.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    CreateFinancialProductComponent,
    FinancialProductContainerComponent,
    FinancialProductsTableComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
