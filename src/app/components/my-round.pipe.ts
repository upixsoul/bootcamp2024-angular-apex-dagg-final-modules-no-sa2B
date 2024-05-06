import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRound'
})
export class MyRoundPipe implements PipeTransform {

  transform(value: number): number {
    var int_part = Math.trunc(value);
    var float_part = Number((value-int_part).toFixed(2));
    if(float_part >= 0.51)
      {
        return Math.round(value);
      }
      else if(float_part > 0)
      {
        return int_part + 0.5;
      }
      else
        {
          return int_part;
        }
  }

}
