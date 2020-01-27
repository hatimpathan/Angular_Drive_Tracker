import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'educ'
})
export class EducationPipe implements PipeTransform {

  transform(number: any): any {
    if(number == 0){
     return"BE";
    } else if(number == 1){
      return"12th";
    }else  if(number == 2){
      return"other";
    }
  }
}
