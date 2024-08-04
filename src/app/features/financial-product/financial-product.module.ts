import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiMoreActionsButtonComponent } from '../../ui/components/buttons/more-actions-button/more-actions-button.component';
import { UiPrimaryButtonComponent } from '../../ui/components/buttons/primary-button/primary-button.component';
import { UiSecondaryButtonComponent } from '../../ui/components/buttons/secondary-button/secondary-button.component';
import { UiInfoIconComponent } from '../../ui/components/icons/info-icon/info-icon.component';
import { UiInputErrorMessagesComponent } from '../../ui/components/inputs/input-error-messages/input-error-messages.component';
import { UiInputFormFieldComponent } from '../../ui/components/inputs/input-form-field/input-form-field.component';
import { UiFooterTableComponent } from '../../ui/components/tables/footer-table/footer-table.component';
import { CreateFinancialProductContainerComponent } from './components/create-financial-product-container/create-financial-product-container.component';
import { CreateFinancialProductComponent } from './components/create-financial-product/create-financial-product.component';
import { FinancialProductsContainerComponent } from './components/financial-products-container/financial-products-container.component';
import { FinancialProductsTableComponent } from './components/financial-products-table/financial-products-table.component';
import { FinancialTableSkeletonComponent } from './components/financial-table-skeleton/financial-table-skeleton.component';
import { FinancialProductRoutingModule } from './financial-product-routing.module';
import { UiSearcherInputComponent } from '../../ui/components/inputs/ui-searcher-input/ui-searcher-input.component';

@NgModule({
  declarations: [
    CreateFinancialProductContainerComponent,
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
    UiSecondaryButtonComponent,
    UiPrimaryButtonComponent,
    UiInputFormFieldComponent,
    UiInputErrorMessagesComponent,
    UiInfoIconComponent,
    UiSearcherInputComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FinancialProductModule {}
