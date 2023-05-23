import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(time: string): string {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return `${hours + Math.floor(minutes / 60)}h ${minutes % 60}m`;
  }
}
