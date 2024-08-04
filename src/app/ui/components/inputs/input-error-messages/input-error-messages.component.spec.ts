import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputErrorMessagesComponent } from './input-error-messages.component';

describe('UiInputErrorMessagesComponent', () => {
  let component: UiInputErrorMessagesComponent;
  let fixture: ComponentFixture<UiInputErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputErrorMessagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInputErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
