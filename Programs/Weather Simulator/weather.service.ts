import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherData = {
    'New York': { temperature: 25, condition: 'Sunny' },
    'London': { temperature: 18, condition: 'Cloudy' },
    'Tokyo': { temperature: 30, condition: 'Rainy' },
    'Sydney': { temperature: 22, condition: 'Windy' },
    'São Paulo': { temperature: 28, condition: 'Clear' }
  };

  getWeather(city: string) {
    return this.weatherData[city] || { temperature: 0, condition: 'Unknown' };
  }
}
