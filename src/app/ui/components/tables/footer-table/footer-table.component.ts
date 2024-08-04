import { Component, Input } from '@angular/core';
import {
  DropdownItem,
  UiBasicDropdownComponent,
} from '../../dropdowns/basic-dropdown/basic-dropdown.component';

export const OPTIONS: DropdownItem[] = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

@Component({
  selector: 'app-footer-table',
  standalone: true,
  imports: [UiBasicDropdownComponent],
  templateUrl: './footer-table.component.html',
  styleUrl: './footer-table.component.scss',
})
export class UiFooterTableComponent {
  @Input() itemsNumber = 0;

  paginationOptions = OPTIONS;
  pageSize = this.paginationOptions[0].value;
}
