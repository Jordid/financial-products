import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FinancialProductModule } from '../../financial-product.module';
import { FinancialProductService } from '../../services/financial-product.service';
import { CreateFinancialProductComponent } from './create-financial-product.component';

describe('CreateFinancialProductComponent', () => {
  let component: CreateFinancialProductComponent;
  let fixture: ComponentFixture<CreateFinancialProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFinancialProductComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FinancialProductModule,
      ],
      providers: [FinancialProductService, FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFinancialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the title: Formulario de Registro', () => {
    expect(component.title).toEqual('Formulario de Registro');
  });

  /*it('should have a form', () => {
    expect(component.form).toBeDefined();
  });

  it('should have a submitting flag', () => {
    expect(component.submitting).toBeFalsy();
  });

  it('should have a verifyingId flag', () => {
    expect(component.verifiyingId).toBeFalse();
  });

  it('should have a formSkeleton', () => {
    expect(component.formSkeleton).toBeDefined();
  });

  it('should have an InputValidation object', () => {
    expect(component.InputValidation).toBeDefined();
  });

  it('should have a formBuilder', () => {
    expect(component.formBuilder).toBeUndefined();
  });

  it('should build the form', () => {
    component.buildForm();
    expect(component.form).toBeDefined();
  });

  it('should reset the form', () => {
    component.reset();
    expect(component.form.reset).toHaveBeenCalled();
  });

  it('should send the form', () => {
    spyOn(component, 'createFinancialProduct');
    component.send();
    expect(component.createFinancialProduct).toHaveBeenCalled();
  });

  it('should update a financial product', () => {
    const financialProduct: FinancialProduct = {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      logo: 'logo.png',
      date_release: '2022-01-01',
      date_revision: '2022-01-02',
    };
    component.updateFinancialProduct(financialProduct);
  });

  it('should check if the form is dirty', () => {
    expect(component.isFormDirty).toBeFalse();
  });

  it('should check if the form is valid', () => {
    expect(component.isFormValid).toBeFalse();
  });

  it('should handle form data changes', () => {
    spyOn(component, 'fillForm');
    component.handleFormDataChanges();
    expect(component.fillForm).toHaveBeenCalled();
  });*/
});
