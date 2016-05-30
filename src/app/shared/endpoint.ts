import { BASE_URL, API_KEY } from './config/open-weather-api.ts';

function weatherData(city:String):string {
  return `${BASE_URL}${city}&appid=${API_KEY}`;
}

export const endpoint = {
  weatherData: weatherData
}
