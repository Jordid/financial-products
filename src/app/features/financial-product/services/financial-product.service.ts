import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiBancoPinchinchaEnv } from '../../../core/apis/banco-pichincha/env-banco-pichincha.config';
import {
  CreateFinancialProduct,
  FinancialProduct,
} from '../../interfaces/financial-product.interface';

@Injectable({
  providedIn: 'root',
})
export class FinancialProductService {
  constructor(private http: HttpClient) {}

  getFinancialProducts() {
    const url = `${ApiBancoPinchinchaEnv.baseUrl}/ipf-msaproductosfinancieros/bp/products`;

    return this.http.get<FinancialProduct[]>(`${url}`);
  }

  create(financialProduct: CreateFinancialProduct) {
    const url = `${ApiBancoPinchinchaEnv.baseUrl}/ipf-msaproductosfinancieros/bp/products`;

    return this.http.post<FinancialProduct>(`${url}`, financialProduct);
  }
}
