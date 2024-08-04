import { Component, Input } from '@angular/core';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';

@Component({
  selector: 'app-financial-products-table',
  templateUrl: './financial-products-table.component.html',
  styleUrl: './financial-products-table.component.scss',
})
export class FinancialProductsTableComponent {
  @Input() financialProducts: FinancialProduct[] = [];
}
