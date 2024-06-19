import { Component } from '@angular/core';

@Component({
  selector: 'app-gps-converter',
  templateUrl: './gps-converter.component.html',
  styleUrls: ['./gps-converter.component.css']
})
export class GpsConverterComponent {
  decimalDegrees: number | null = null;
  dms: { degrees: number, minutes: number, seconds: number } | null = null;

  convertToDMS(decimalDegrees: number) {
    const degrees = Math.floor(decimalDegrees);
    const minutesNotTruncated = (decimalDegrees - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = (minutesNotTruncated - minutes) * 60;

    this.dms = { degrees, minutes, seconds: +seconds.toFixed(2) };
  }

  convertToDecimalDegrees(degrees: number, minutes: number, seconds: number) {
    const decimalDegrees = degrees + minutes / 60 + seconds / 3600;
    this.decimalDegrees = +decimalDegrees.toFixed(6);
  }
}
