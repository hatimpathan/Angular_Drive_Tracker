import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform (_numbe:number): any {
    if(_numbe == 0){
        return"Full Stack Developer";
    } else if(_numbe == 1){
        return"UI Developer";
    } else if(_numbe == 2){
        return "Middleware/Beckend  developer";
    } else if(_numbe == 3){
       return "Testing Engineer";
    }
  }

}
