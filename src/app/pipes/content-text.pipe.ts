import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentText',
})
export class ContentTextPipe implements PipeTransform {
  transform(value: string, maxlen: number = 15): string {
    if (value.length > maxlen) {
      return value.substr(0, maxlen) + '...';
    }
    return value;
  }
}
