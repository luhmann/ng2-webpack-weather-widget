import 'rxjs/add/observable/of';

import {provide} from '@angular/core';
import {TestComponentBuilder, async, inject} from 'angular2-testing-lite/core';
import {
  beforeEach,
  beforeEachProviders,
  describe,
  it,
  xdescribe,
  xit
} from 'angular2-testing-lite/mocha';
import {expect} from 'chai';
import {Observable} from 'rxjs/Observable';

import {KelvinToCelsiusPipe} from '../lib/kelvinToCelcius.pipe';

import {OpenWeatherApi} from './open-weather-api.service';
import {WeatherWidget} from './weather-widget.component';

const mockWeatherApiResponse =
  require('../../../test/mocks/open-weather-api/_fixtures/berlin.json');

class MockOpenWeatherApi
{
  getWeatherForCity(city: string): Observable<Object>
  {
    return Observable.of(mockWeatherApiResponse);
  }
}

describe('Component: WeatherWidget', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [KelvinToCelsiusPipe]);

  beforeEach(inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
    builder = tcb.overrideProviders(
      WeatherWidget,
      [ provide(OpenWeatherApi, { useClass : MockOpenWeatherApi }) ]);
  }));

  it('can create', () => {
    return builder.createAsync(WeatherWidget).then(fixture => {
      expect(fixture).to.exist;
    });
  });

  it('should display the city name', () => {
    return builder.createAsync(WeatherWidget).then(fixture => {
      let component = fixture.componentInstance,
          element = fixture.nativeElement;

      component.city = 'Berlin';

      fixture.detectChanges();
      expect(element.querySelector('.weather__city').innerText)
        .to.equal('Berlin');
    });
  });

  it('should transform the temperature from Kelvin to Celcius and display it',
     () => {
       return builder.createAsync(WeatherWidget).then(fixture => {
         let component = fixture.componentInstance,
             element = fixture.nativeElement;

         component.city = 'Berlin';

         fixture.detectChanges();
         expect(element.querySelector('.weather__detail__temp').innerText)
           .to.equal('21.91°C');
       });
     });

  it('should contain an icon with a url by open weather api', () => {
    return builder.createAsync(WeatherWidget).then(fixture => {
      let component = fixture.componentInstance,
          element = fixture.nativeElement;

      component.city = 'Berlin';

      fixture.detectChanges();
      expect(element.querySelector('img').getAttribute('src'))
        .to.equal('http://openweathermap.org/img/w/01d.png');
      expect(component.generateIconUrl())
        .to.equal('http://openweathermap.org/img/w/01d.png');
    });
  });
});
