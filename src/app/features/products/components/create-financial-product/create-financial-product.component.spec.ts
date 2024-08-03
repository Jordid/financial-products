import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinancialProductComponent } from './create-financial-product.component';

describe('CreateFinancialProductComponent', () => {
  let component: CreateFinancialProductComponent;
  let fixture: ComponentFixture<CreateFinancialProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFinancialProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFinancialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
