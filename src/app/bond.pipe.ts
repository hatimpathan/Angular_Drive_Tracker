import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bond'
})
export class BondPipe implements PipeTransform {

  transform(number: any): any {
    if(number == 0){
     return" 1 year";
    } else if(number == 1){
      return"2 year";
    }
  }
}
