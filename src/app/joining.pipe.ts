import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoiningPipe implements PipeTransform {
  transform(number: any): any {
    if(number == 0){
     return" NO training dirct join";
    } else if(number == 1){
      return"3 month Internship then joining";
    }
  }
}
