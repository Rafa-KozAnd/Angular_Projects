import { Component, HostListener, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-flappy-bird',
  templateUrl: './flappy-bird.component.html',
  styleUrls: ['./flappy-bird.component.css']
})
export class FlappyBirdComponent implements OnInit {
  gameOver = false;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.startGame();
    this.gameService.getScore().subscribe(score => {
      console.log('Score:', score);
    });
  }

  @HostListener('window:keydown.space', ['$event'])
  jump(event: KeyboardEvent) {
    event.preventDefault();
    this.gameService.jump();
  }
}
