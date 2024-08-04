import { Component, OnInit } from '@angular/core';
import { catchError, delay, of } from 'rxjs';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';
import { FINANCIAL_PRODUCS_MOCK } from './financial-products-mock';

@Component({
  selector: 'app-financial-products-container',
  templateUrl: './financial-products-container.component.html',
  styleUrl: './financial-products-container.component.scss',
})
export class FinancialProductsContainerComponent implements OnInit {
  gettingFinancialProducts = false;
  financialProducts: FinancialProduct[] = [];
  elementsByPage: FinancialProduct[] = [];
  pageSize = 5;

  constructor(private financialProductService: FinancialProductService) {}
  ngOnInit(): void {
    this.gettingFinancialProducts = true;
    this.financialProducts = [];

    this.financialProductService
      .getFinancialProducts()
      .pipe(
        catchError(() => {
          return of(null);
        }),
        delay(1000)
      )
      .subscribe((response) => {
        this.gettingFinancialProducts = false;

        if (response === null) {
          this.financialProducts = FINANCIAL_PRODUCS_MOCK;

          this.takeElementaByPageSize();

          return;
        }
      });
  }

  handleChangePageSize(pageSize: number): void {
    this.pageSize = pageSize;

    this.takeElementaByPageSize();
  }

  takeElementaByPageSize(): void {
    if (this.financialProducts.length >= this.pageSize) {
      this.elementsByPage = this.financialProducts.slice(0, this.pageSize);

      return;
    }

    this.elementsByPage = FINANCIAL_PRODUCS_MOCK;
  }

  handleSearcherValueChange(value: string) {
    console.log('Searching for: ', value);
  }
}
