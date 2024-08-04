import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { InputValidation } from '../../../../core/utils/validations/input-validation';
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
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    name: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    ],
    logo: ['', [Validators.required]],
    date_release: ['', [Validators.required]],
    date_revision: ['', [Validators.required]],
  };

  InputValidation = InputValidation;

  private originalFormData: FinancialProduct | null = null;

  constructor(
    private fb: FormBuilder,
    private financialProductService: FinancialProductService
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

    const createFinancialProduct: CreateFinancialProduct = this.form.value;

    console.log(createFinancialProduct);

    this.financialProductService
      .create(createFinancialProduct)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.submitting = false;

        if (response === null) {
          // TODO: handle error
          return;
        }
      });

    this.form.reset();
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
