import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { FinancialProductService } from '../../services/financial-product.service';

@Component({
  selector: 'app-financial-products-container',
  templateUrl: './financial-products-container.component.html',
  styleUrl: './financial-products-container.component.scss',
})
export class FinancialProductsContainerComponent implements OnInit {
  gettingFinancialProducts = false;

  constructor(private financialProductService: FinancialProductService) {}
  ngOnInit(): void {
    this.gettingFinancialProducts = true;

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
          //this.budgetRequestSnackbarsService.failureAcceptQuote();

          return;
        }
      });
  }
}
