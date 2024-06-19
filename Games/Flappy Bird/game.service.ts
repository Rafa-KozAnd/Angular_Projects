import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';

export interface Bird {
  x: number;
  y: number;
  velocity: number;
  size: number;
}

export interface Pipe {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  bird: Bird = {
    x: 50,
    y: 150,
    velocity: 0,
    size: 20
  };

  pipes: Pipe[] = [];

  gameSpeed = 2;
  gravity = 0.7;
  jumpStrength = -10;
  pipeWidth = 50;
  pipeGap = 150;
  pipeFrequency = 1500; // milliseconds

  score = 0;

  gameOver = false;

  private scoreSubject = new BehaviorSubject<number>(0);

  constructor() {
    this.scoreSubject.next(0);
    interval(this.pipeFrequency).subscribe(() => {
      if (!this.gameOver) {
        this.addPipe();
      }
    });

    interval(20).subscribe(() => {
      if (!this.gameOver) {
        this.moveBird();
        this.movePipes();
        this.detectCollisions();
      }
    });
  }

  getScore(): Observable<number> {
    return this.scoreSubject.asObservable();
  }

  startGame(): void {
    this.resetGame();
    this.gameOver = false;
  }

  jump(): void {
    if (!this.gameOver) {
      this.bird.velocity = this.jumpStrength;
    }
  }

  moveBird(): void {
    this.bird.velocity += this.gravity;
    this.bird.y += this.bird.velocity;

    if (this.bird.y <= 0) {
      this.bird.y = 0;
      this.bird.velocity = 0;
    }

    if (this.bird.y + this.bird.size >= 400) {
      this.gameOver = true;
    }
  }

  movePipes(): void {
    for (let i = this.pipes.length - 1; i >= 0; i--) {
      this.pipes[i].x -= this.gameSpeed;

      if (this.pipes[i].x + this.pipeWidth < 0) {
        this.pipes.splice(i, 1);
        this.score++;
        this.scoreSubject.next(this.score);
      }
    }
  }

  addPipe(): void {
    const pipeHeight = Math.floor(Math.random() * 200) + 100;
    const pipe: Pipe = {
      x: 800,
      y: pipeHeight,
      width: this.pipeWidth,
      height: 400 - pipeHeight - this.pipeGap / 2
    };
    this.pipes.push(pipe);
  }

  detectCollisions(): void {
    for (const pipe of this.pipes) {
      if (
        this.bird.x + this.bird.size >= pipe.x && // Bird's right edge past pipe's left edge
        this.bird.x <= pipe.x + pipe.width && // Bird's left edge before pipe's right edge
        (this.bird.y <= pipe.y || this.bird.y + this.bird.size >= pipe.y + pipe.height) // Bird hits pipe
      ) {
        this.gameOver = true;
        break;
      }
    }
  }

  resetGame(): void {
    this.bird = {
      x: 50,
      y: 150,
      velocity: 0,
      size: 20
    };
    this.pipes = [];
    this.score = 0;
    this.scoreSubject.next(0);
  }
}
