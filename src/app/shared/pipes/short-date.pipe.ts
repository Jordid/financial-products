import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bpShortDate',
  standalone: true,
})
export class ShortDatePipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (!value) return null;
    return value.substring(0, 10);
  }
}
