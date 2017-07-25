/**
 * Created by shalom on 7/24/17.
 */


import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'removeSpecialChars'})
export class SpecialCharsPipe implements PipeTransform {

  transform(value: any) {
    if (value) {
      for (let char of value) {
        if (!(/^[A-Za-z][A-Za-z0-9]*$/.test(char))) {
          console.log(char);
          value.replace(char,'');
        }
      }
    }
    return value;
  }
}
