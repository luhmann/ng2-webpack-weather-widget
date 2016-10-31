import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {endpoint} from '../shared/';

@Injectable() export class OpenWeatherApi
{
  constructor(private http: Http){};

  getWeatherForCity(city: String): Observable<Object>
  {
    return this.http.get(endpoint.weatherData(city))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response)
  {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  private handleError(error: any)
  {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
