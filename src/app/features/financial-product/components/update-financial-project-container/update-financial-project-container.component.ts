import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';

@Component({
  selector: 'bp-update-financial-project-container',
  templateUrl: './update-financial-project-container.component.html',
  styleUrl: './update-financial-project-container.component.scss',
})
export class UpdateFinancialProjectContainerComponent {
  formData: FinancialProduct | null = null;

  constructor(
    private financialProductService: FinancialProductService,
    private datePipe: DatePipe
  ) {
    this.formData = this.financialProductService.getSelectedProduct();

    if (this.formData) {
      this.formData.date_release = this.formData.date_release.substring(0, 10);
      this.formData.date_revision = this.formData.date_revision.substring(
        0,
        10
      );
    }
  }
}
