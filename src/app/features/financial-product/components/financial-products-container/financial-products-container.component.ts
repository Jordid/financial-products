import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { FinancialProductService } from '../../services/financial-product.service';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';

@Component({
  selector: 'app-financial-products-container',
  templateUrl: './financial-products-container.component.html',
  styleUrl: './financial-products-container.component.scss',
})
export class FinancialProductsContainerComponent implements OnInit {
  gettingFinancialProducts = false;
  financialProducts: FinancialProduct[] = [];

  constructor(private financialProductService: FinancialProductService) {}
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
          this.financialProducts = [
            {
              date_release: '2021-09-01',
              date_revision: '2021-09-01',
              description: 'description_1',
              id: '1',
              logo: 'https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png',
              name: 'name_1',
            },
            {
              date_release: '2021-09-01',
              date_revision: '2021-09-01',
              description: 'description_2',
              id: '2',
              logo: 'https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png',
              name: 'name_2',
            },
            {
              date_release: '2021-09-01',
              date_revision: '2021-09-01',
              description: 'description_3',
              id: '3',
              logo: 'https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png',
              name: 'name_3',
            },
            {
              date_release: '2021-09-01',
              date_revision: '2021-09-01',
              description: 'description_4',
              id: '4',
              logo: 'https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png',
              name: 'name_4',
            },
            {
              date_release: '2021-09-01',
              date_revision: '2021-09-01',
              description: 'description_5',
              id: '5',
              logo: 'https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png',
              name: 'name_5',
            },
          ];

          return;
        }
      });
  }
}
