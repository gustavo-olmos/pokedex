import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador'
})
export class TransformadorPipe implements PipeTransform {

  transform(value: any, name: any, token: any): any {
    return value + ' - ' + name + ' - ' + token;
  }

}
