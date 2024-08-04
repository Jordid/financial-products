import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinancialProductContainerComponent } from './create-financial-product-container.component';

describe('CreateFinancialProductContainerComponent', () => {
  let component: CreateFinancialProductContainerComponent;
  let fixture: ComponentFixture<CreateFinancialProductContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFinancialProductContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFinancialProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
