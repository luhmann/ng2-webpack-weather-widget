import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'formatTemp'})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(value: number): string {
    value = this.kelvinToCelsius(value);
    value = this.twoDecimals(value);
    return `${value}°C`;
  }

  private kelvinToCelsius(degrees: number) {
    var temp = degrees - 273.15;
    return (temp < 0) ? 0 : temp;
  }

  private twoDecimals(value: number): number { return Math.floor(value * 100) / 100; }
}
