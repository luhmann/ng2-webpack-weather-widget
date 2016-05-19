import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '51cde100c00b0ec934144479e58b67eb';

@Injectable()
export class OpenWeatherApi {
  constructor(private http: Http){};

  getWeatherForCity(city: String): Observable<Object> {
    return this.http.get(`${BASE_URL}${city}&appid=${API_KEY}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg);  // log to console instead
    return Observable.throw(errMsg);
  }
}
