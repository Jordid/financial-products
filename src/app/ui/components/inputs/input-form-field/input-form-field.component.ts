import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-input-form-field',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input-form-field.component.html',
  styleUrl: './input-form-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputFormFieldComponent),
      multi: true,
    },
  ],
})
export class UiInputFormFieldComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabled = false;

  formBuilder: FormBuilder;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formBuilder = fb;

    this.form = this.formBuilder.group({
      control: [''],
    });
  }

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.emitFormValues(this.form.controls.control.value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /* Start ControlValueAccessor implementation. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  onChange(value?: string) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched() {}

  writeValue(value?: string) {
    this.form.controls.control.setValue(value);
  }

  registerOnChange(fn: (value?: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.form.controls.control[isDisabled ? 'disable' : 'enable']();
  }

  emitFormValues(value: string) {
    if (this.form.pristine) {
      return;
    }

    this.onChange(value);
    this.onTouched();

    this.form.markAsPristine();
  }
}
