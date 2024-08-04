import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-more-actions-button',
  standalone: true,
  imports: [],
  templateUrl: './more-actions-button.component.html',
  styleUrl: './more-actions-button.component.scss',
})
export class UiMoreActionsButtonComponent {
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  editItem() {
    this.edit.emit();
  }

  deleteItem() {
    this.delete.emit();
  }
}
