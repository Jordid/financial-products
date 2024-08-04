import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-error-messages',
  standalone: true,
  imports: [],
  templateUrl: './input-error-messages.component.html',
  styleUrl: './input-error-messages.component.scss',
})
export class UiInputErrorMessagesComponent implements OnInit {
  @Input() fc!: AbstractControl;
  @Input() aditionalString: any;

  public stringHelper!: string;

  ngOnInit(): void {
    if (this.aditionalString && typeof this.aditionalString === 'string') {
      this.stringHelper = this.aditionalString;
    }
  }
}
