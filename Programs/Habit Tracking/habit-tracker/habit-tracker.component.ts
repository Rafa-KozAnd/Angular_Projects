import { Component } from '@angular/core';
import { HabitService, Habit } from '../habit.service';

@Component({
  selector: 'app-habit-tracker',
  templateUrl: './habit-tracker.component.html',
  styleUrls: ['./habit-tracker.component.css']
})
export class HabitTrackerComponent {
  habits: Habit[] = [];
  newHabitName: string = '';

  constructor(private habitService: HabitService) {
    this.habits = this.habitService.getHabits();
  }

  addHabit() {
    if (this.newHabitName.trim()) {
      this.habitService.addHabit(this.newHabitName);
      this.newHabitName = '';
    }
  }

  toggleHabitCompletion(index: number) {
    this.habitService.toggleHabitCompletion(index);
  }

  removeHabit(index: number) {
    this.habitService.removeHabit(index);
  }
}
