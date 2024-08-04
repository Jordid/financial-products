import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, of } from 'rxjs';
import { AlertType } from '../../../../ui/components/alerts/enums/alert-type.enum';
import { AlertService } from '../../../../ui/components/alerts/services/alert.service';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';

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

  constructor(
    private financialProductService: FinancialProductService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gettingFinancialProducts = true;
    this.financialProducts = [];

    this.financialProductService
      .getFinancialProducts()
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.gettingFinancialProducts = false;

        if (response === null) {
          this.alertService.showNotification(
            'Error al obtener los productos financieros.',
            AlertType.Error
          );

          this.takeElementaByPageSize();

          return;
        }

        this.financialProducts = response;

        this.takeElementaByPageSize();
      });
  }

  handleEditProduct(product: FinancialProduct): void {
    this.financialProductService.setSelectedProduct(product);

    this.router.navigate([`/financial-products/${product.id}/update`]);
  }

  handleDeleteProduct(product: FinancialProduct): void {
    console.log('Deleting product: ', product);
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

    this.elementsByPage = this.financialProducts;
  }

  handleSearcherValueChange(value: string) {
    console.log('Searching for: ', value);
  }
}
