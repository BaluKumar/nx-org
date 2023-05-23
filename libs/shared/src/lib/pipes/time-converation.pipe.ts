import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConveration',
})
export class TimeConverationPipe implements PipeTransform {
  transform(time: Date) {
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    if (hours > 12) {
      return `${(hours - 12) + Math.floor(minutes / 60)}:${minutes % 60}:${seconds} PM`;
    }
    return `${hours + Math.floor(minutes / 60)}: ${minutes % 60}:${seconds} AM`;
  }
}
