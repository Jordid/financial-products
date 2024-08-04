import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiBancoPinchinchaEnv } from '../../../core/apis/banco-pichincha/env-banco-pichincha.config';
import {
  CreateFinancialProduct,
  FinancialProduct,
} from '../../interfaces/financial-product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinancialProductService {
  constructor(private http: HttpClient) {}

  selectedProduct: FinancialProduct | null = null;

  setSelectedProduct(product: FinancialProduct) {
    this.selectedProduct = product;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

  getFinancialProducts() {
    const url = `${ApiBancoPinchinchaEnv.baseUrl}/ipf-msa-productosfinancieros/bp/products/`;

    return this.http.get<FinancialProduct[]>(`${url}`);
  }

  create(financialProduct: CreateFinancialProduct) {
    const url = `${ApiBancoPinchinchaEnv.baseUrl}/ipf-msa-productosfinancieros/bp/products`;

    return this.http.post<FinancialProduct>(`${url}`, financialProduct);
  }

  update(financialProduct: CreateFinancialProduct) {
    const url = `${ApiBancoPinchinchaEnv.baseUrl}/ipf-msa-productosfinancieros/bp/products`;

    return this.http.put<FinancialProduct>(`${url}`, financialProduct);
  }

  delete(id: string): Observable<any> {
    const url = `${ApiBancoPinchinchaEnv.baseUrl}/ipf-msa-productosfinancieros/bp/products?id=${id}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json',
    };
    return this.http.delete(url, httpOptions);
  }
}
