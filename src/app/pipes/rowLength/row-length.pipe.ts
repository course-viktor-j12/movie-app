import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rowLength',
  standalone: true
})
export class RowLengthPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) return '';
    return value.length > limit ? `${value.slice(0, limit)}...` : value;
  }
}
