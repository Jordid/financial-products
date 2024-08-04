import { Component } from '@angular/core';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';

@Component({
  selector: 'app-update-financial-project-container',
  templateUrl: './update-financial-project-container.component.html',
  styleUrl: './update-financial-project-container.component.scss',
})
export class UpdateFinancialProjectContainerComponent {
  formData: FinancialProduct = {
    id: 'id_1',
    name: 'name_1',
    description: 'description_1',
    logo: 'logo_1',
    date_release: 'date_release_1',
    date_revision: 'date_revision_1',
  };
}
