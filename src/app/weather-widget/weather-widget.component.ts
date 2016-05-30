import {Component, Input} from '@angular/core';
import {OnInit} from '@angular/core';

import {OpenWeatherApi} from './open-weather-api.service';
import {KelvinToCelsiusPipe} from '../lib/kelvinToCelcius.pipe';

@Component({
  selector: 'weather',
  pipes: [KelvinToCelsiusPipe],
  styles: [require('./weather-widget.styles.styl')],
  template: require('./weather-widget.template.html')
})
export class WeatherWidget implements OnInit {
  @Input()
  city: String;

  weatherData: any;
  errorMessage: Object;
  constructor(private weatherService: OpenWeatherApi) {};

  ngOnInit() {
    this.weatherService.getWeatherForCity(this.city).subscribe(
        weatherData => this.weatherData = weatherData, error => this.errorMessage = <any>error);
  }

  generateIconUrl() {
    return `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`;
  }
}
