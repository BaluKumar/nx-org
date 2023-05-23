import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastSeen',
})
export class LastSeenPipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    const todayDate: Date = new Date();
    const year = todayDate.getFullYear() - value.getFullYear(),
      month = todayDate.getMonth() - value.getMonth(),
      day = todayDate.getDate() - value.getDate(),
      hours = todayDate.getHours() - value.getHours(),
      min = todayDate.getMinutes() - value.getMinutes(),
      sec = todayDate.getSeconds() - value.getSeconds();
      let lastSeen='';
    // let lastSeen = year > 0 ? `${year}Years` : month > 0 ? `${month}Month` : day >= 7 ? `${Math.floor(day / 7)}Weeks` :
    //   day > 0 && day < 7 ? `${day}Days` : hours > 0 ? `${hours}Hours` : min > 0 ? `${min}Minutes` : sec > 0 ? `${sec}Seconds` : `0 sec`;
    if (year > 0) {
      lastSeen += `${year}Years`;
    }else
    if (month > 0) {
      lastSeen += `${month}Month`;
    }else
    if (day >= 7) {
      lastSeen += `${Math.floor(day / 7)}Weeks`;
    }else
    if (day > 0 && day < 7) {
      lastSeen += `${day}Days`;
    }else
    if (hours > 0) {
      lastSeen += `${hours}Hours`;
    }else
    if (min > 0) {
      lastSeen += `${min}Minutes`;
    }else
    if (sec > 0) {
      lastSeen += `${sec}Seconds`;
    } else {
      lastSeen += `0 sec`;
    }
    return lastSeen;
  }
}
