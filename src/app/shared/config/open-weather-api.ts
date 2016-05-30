import {environment} from '../../index'

let baseUrl, apiKey;

if (environment.production) {
  baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '51cde100c00b0ec934144479e58b67eb';
} else {
  baseUrl = 'http://localhost:4444/weather?q=';
  apiKey = '';
}

export const BASE_URL = baseUrl;
export const API_KEY = apiKey;
