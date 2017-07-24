import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'toLowerCase'})
export class ToLowerCasePipe implements PipeTransform {

  transform(value:any) {
    if (value) {
      return value.toLowerCase();
    }
    return value;
  }

}
