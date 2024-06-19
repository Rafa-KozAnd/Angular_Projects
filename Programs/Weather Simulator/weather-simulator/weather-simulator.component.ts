import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-simulator',
  templateUrl: './weather-simulator.component.html',
  styleUrls: ['./weather-simulator.component.css']
})
export class WeatherSimulatorComponent {
  cities = ['New York', 'London', 'Tokyo', 'Sydney', 'São Paulo'];
  selectedCity: string = '';
  weather: { temperature: number, condition: string } | null = null;

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    if (this.selectedCity) {
      this.weather = this.weatherService.getWeather(this.selectedCity);
    }
  }
}
