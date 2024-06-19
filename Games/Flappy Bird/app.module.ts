import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlappyBirdComponent } from './flappy-bird/flappy-bird.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    FlappyBirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
