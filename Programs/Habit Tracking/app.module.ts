import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { HabitService } from './habit.service';

@NgModule({
  declarations: [
    AppComponent,
    HabitTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HabitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
