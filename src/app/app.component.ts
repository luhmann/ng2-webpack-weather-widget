import {Component, AfterContentInit} from '@angular/core';

import {WeatherWidget} from './weather-widget/weather-widget.component';
import {OpenWeatherApi} from './weather-widget/open-weather-api.service';

@Component({
  selector: 'my-app',
  directives: [WeatherWidget],
  styles: [require('./app.styles.styl')],
  template: `
    <div class="app" [class.app_loading]="isLoading">
      <weather city="Berlin"></weather>
      <weather city="Hamburg"></weather>
      <weather city="München"></weather>
      <weather city="New York"></weather>
      <weather city="Tokyo"></weather>
    </div>
    `,
  providers: [OpenWeatherApi]
})
export class AppComponent implements AfterContentInit {
  isLoading = true;

  ngAfterContentInit() { this.isLoading = false; }
}
