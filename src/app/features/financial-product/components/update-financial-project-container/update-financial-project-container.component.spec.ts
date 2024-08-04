import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinancialProjectContainerComponent } from './update-financial-project-container.component';

describe('UpdateFinancialProjectContainerComponent', () => {
  let component: UpdateFinancialProjectContainerComponent;
  let fixture: ComponentFixture<UpdateFinancialProjectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFinancialProjectContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateFinancialProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
