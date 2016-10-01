import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tochinesenumber'
})
export class TochinesenumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
