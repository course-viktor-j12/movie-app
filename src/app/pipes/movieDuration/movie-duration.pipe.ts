import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDuration',
  standalone: true
})
export class MovieDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '';
    
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    const seconds = Math.floor((value % 1) * 60);

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
