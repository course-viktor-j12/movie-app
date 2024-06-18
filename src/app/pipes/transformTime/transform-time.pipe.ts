import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTime',
  standalone: true
})
export class TransformTimePipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '';

    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    const seconds = Math.floor((value % 1) * 60);

    const formatedHours = this.padZero(hours);
    const formatedMinutes = this.padZero(minutes);
    const formatedSeconds = this.padZero(seconds);
    const time = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;

    return time;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
