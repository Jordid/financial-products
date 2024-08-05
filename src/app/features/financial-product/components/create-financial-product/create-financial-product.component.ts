import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  takeUntil,
} from 'rxjs';
import { InputValidation } from '../../../../core/utils/validations/input-validation';
import { AlertType } from '../../../../ui/components/alerts/enums/alert-type.enum';
import { AlertService } from '../../../../ui/components/alerts/services/alert.service';
import {
  CreateFinancialProduct,
  FinancialProduct,
} from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';
import { idExistsValidator } from '../../validators/product-id-exists-validator';

@Component({
  selector: 'app-create-financial-product',
  templateUrl: './create-financial-product.component.html',
  styleUrl: './create-financial-product.component.scss',
})
export class CreateFinancialProductComponent implements OnInit, OnDestroy {
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
  verifiyingId = false;

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

  originalFormData: FinancialProduct | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private financialProductService: FinancialProductService,
    private alertService: AlertService
  ) {
    this.formBuilder = fb;

    this.buildForm();
  }

  ngOnInit(): void {
    this.handleIdChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleIdChanges() {
    /* Listen changes */
    this.form.controls.id.valueChanges
      .pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe(() => {
        this.verifiyingId = true;
      });

    /* Listen changes and verify after 1 second */
    this.form.controls.id.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        debounceTime(1000)
      )
      .subscribe(() => {
        if (this.form.controls.id.dirty) {
          this.verifyId();
        }
      });
  }

  verifyId(): void {
    const id = this.form.controls.id.value;

    if (!id) {
      return;
    }

    this.financialProductService
      .verifyIf(id)
      .pipe(
        catchError(() => {
          this.alertService.showNotification(
            'Error al verificar el ID.',
            AlertType.Error
          );
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response === null) {
          this.alertService.showNotification(
            'Error al verificar el ID.',
            AlertType.Error
          );
        }

        this.verifiyingId = false;

        this.updateIdControlValidators(response == true);
      });
  }

  updateIdControlValidators(exists: boolean): void {
    if (exists) {
      this.form.controls.id.setValidators([idExistsValidator(exists)]);
    } else {
      this.form.controls.id.setValidators([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]);
    }

    this.form.controls.id.updateValueAndValidity();
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
