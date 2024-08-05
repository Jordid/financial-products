import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FinancialProductModule } from '../../financial-product.module';
import { FinancialProductService } from '../../services/financial-product.service';
import { FinancialProductsContainerComponent } from './financial-products-container.component';

describe('FinancialProductsContainerComponent', () => {
  let component: FinancialProductsContainerComponent;
  let fixture: ComponentFixture<FinancialProductsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialProductsContainerComponent],
      imports: [
        HttpClientTestingModule,
        FinancialProductModule,
        RouterTestingModule,
      ],
      providers: [
        FinancialProductService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} }, // Proporciona un valor simulado para ActivatedRoute si es necesario
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
