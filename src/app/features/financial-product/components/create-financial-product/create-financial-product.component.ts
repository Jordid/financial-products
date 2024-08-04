import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { InputValidation } from '../../../../core/utils/validations/input-validation';
import { AlertType } from '../../../../ui/components/alerts/enums/alert-type.enum';
import { AlertService } from '../../../../ui/components/alerts/services/alert.service';
import {
  CreateFinancialProduct,
  FinancialProduct,
} from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';

@Component({
  selector: 'app-create-financial-product',
  templateUrl: './create-financial-product.component.html',
  styleUrl: './create-financial-product.component.scss',
})
export class CreateFinancialProductComponent {
  @Input() title = 'Formulario de Registro';

  private _formData!: FinancialProduct;

  @Input() get formData() {
    return this._formData;
  }

  set formData(formData: FinancialProduct) {
    this._formData = formData;

    this.handleFormDataChanges();
  }

  formBuilder: FormBuilder;
  form!: FormGroup;
  submitting = false;

  formSkeleton = {
    id: [
      '1000',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    name: [
      'Tarjeta de débito',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    description: [
      'Tarjeta de débito',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    ],
    logo: [
      'https://png.pngtree.com/png-clipart/20210226/ourmid/pngtree-rectangle-credit-card-clip-art-png-image_2956022.jpg',
      [Validators.required],
    ],
    date_release: ['2024-08-04', [Validators.required]],
    date_revision: ['2025-08-04', [Validators.required]],
  };

  InputValidation = InputValidation;

  private originalFormData: FinancialProduct | null = null;

  constructor(
    private fb: FormBuilder,
    private financialProductService: FinancialProductService,
    private alertService: AlertService
  ) {
    this.formBuilder = fb;

    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group(this.formSkeleton);

    // Disable date_revision field
    this.form.controls.date_revision.disable();
  }

  reset() {
    if (this.originalFormData) {
      this.form.reset(this.originalFormData);

      return;
    }

    this.form.reset();
  }

  send() {
    if (!this.isFormValid) {
      return;
    }

    this.submitting = true;

    const financialProduct: CreateFinancialProduct = this.form.getRawValue();

    if (this.formData) {
      this.updateFinancialProduct(financialProduct);

      return;
    }

    this.createFinancialProduct(financialProduct);
  }

  createFinancialProduct(financialProduct: FinancialProduct) {
    this.financialProductService
      .create(financialProduct)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.submitting = false;

        if (response === null) {
          this.alertService.showNotification(
            'Error al crear el producto financiero.',
            AlertType.Error
          );

          return;
        }

        this.alertService.showNotification(
          'Producto financiero creado con éxito.',
          AlertType.Success
        );

        this.form.reset();
      });
  }

  updateFinancialProduct(financialProduct: FinancialProduct) {
    this.financialProductService
      .update(financialProduct)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.submitting = false;

        if (response === null) {
          this.alertService.showNotification(
            'Error al actualizar el producto financiero.',
            AlertType.Error
          );

          return;
        }

        this.alertService.showNotification(
          'Producto financiero actualizado con éxito.',
          AlertType.Success
        );

        this.originalFormData = { ...response };

        this.reset();
      });
  }

  get isFormDirty() {
    return this.form.dirty;
  }

  get isFormValid() {
    return this.isFormDirty && this.form.valid && !this.submitting;
  }

  hasErrors(control: any) {
    return control.invalid && (control.dirty || control.touched);
  }

  handleFormDataChanges() {
    this.originalFormData = { ...this.formData };

    if (this.formData) {
      this.form.controls.id.disable();
    }

    this.fillForm();
  }

  fillForm() {
    this.form.patchValue(this.formData);
  }
}
