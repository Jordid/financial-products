import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-searcher-input',
  standalone: true,
  imports: [],
  templateUrl: './ui-searcher-input.component.html',
  styleUrl: './ui-searcher-input.component.scss',
})
export class UiSearcherInputComponent {
  @Input() placeholder: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.valueChange.emit(inputElement.value);
  }
}
