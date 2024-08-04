import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBasicDropdownComponent } from './basic-dropdown.component';

describe('BasicDropdownComponent', () => {
  let component: UiBasicDropdownComponent;
  let fixture: ComponentFixture<UiBasicDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBasicDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBasicDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
