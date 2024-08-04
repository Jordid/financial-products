import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputValidation } from '../../../../core/utils/validations/input-validation';

@Component({
  selector: 'app-create-financial-product',
  templateUrl: './create-financial-product.component.html',
  styleUrl: './create-financial-product.component.scss',
})
export class CreateFinancialProductComponent {
  formBuilder: FormBuilder;
  form: FormGroup;

  InputValidation = InputValidation;

  constructor(private fb: FormBuilder) {
    this.formBuilder = fb;

    this.form = this.formBuilder.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
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
    });
  }

  reset() {
    this.form.reset();
  }
}
