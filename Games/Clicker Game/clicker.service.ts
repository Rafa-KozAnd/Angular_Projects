import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  clicks = 0;
  clickValue = 1;

  private clicksSubject = new BehaviorSubject<number>(0);

  constructor() {}

  getClicks() {
    return this.clicksSubject.asObservable();
  }

  click() {
    this.clicks += this.clickValue;
    this.clicksSubject.next(this.clicks);
  }

  increaseClickValue() {
    this.clickValue += 1;
  }

  resetGame() {
    this.clicks = 0;
    this.clickValue = 1;
    this.clicksSubject.next(this.clicks);
  }
}
