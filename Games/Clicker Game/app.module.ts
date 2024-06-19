import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickerGameComponent } from './clicker-game/clicker-game.component';
import { ClickerService } from './clicker.service';

@NgModule({
  declarations: [
    AppComponent,
    ClickerGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ClickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
