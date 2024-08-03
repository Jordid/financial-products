import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductContainerComponent } from './financial-product-container.component';

describe('FinancialProductContainerComponent', () => {
  let component: FinancialProductContainerComponent;
  let fixture: ComponentFixture<FinancialProductContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialProductContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
