import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearcherInputComponent } from './ui-searcher-input.component';

describe('UiSearcherInputComponent', () => {
  let component: UiSearcherInputComponent;
  let fixture: ComponentFixture<UiSearcherInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSearcherInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSearcherInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
