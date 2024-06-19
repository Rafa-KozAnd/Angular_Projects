import { Component, OnInit } from '@angular/core';
import { ClickerService } from '../clicker.service';

@Component({
  selector: 'app-clicker-game',
  templateUrl: './clicker-game.component.html',
  styleUrls: ['./clicker-game.component.css']
})
export class ClickerGameComponent implements OnInit {
  clicks = 0;
  clickValue = 1;

  constructor(private clickerService: ClickerService) {}

  ngOnInit(): void {
    this.clickerService.getClicks().subscribe(clicks => {
      this.clicks = clicks;
    });
  }

  click() {
    this.clickerService.click();
  }

  increaseClickValue() {
    this.clickerService.increaseClickValue();
  }

  resetGame() {
    this.clickerService.resetGame();
  }
}
