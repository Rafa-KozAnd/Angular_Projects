import { Injectable } from '@angular/core';

export interface Habit {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private habits: Habit[] = [];

  getHabits(): Habit[] {
    return this.habits;
  }

  addHabit(name: string) {
    this.habits.push({ name, completed: false });
  }

  toggleHabitCompletion(index: number) {
    this.habits[index].completed = !this.habits[index].completed;
  }

  removeHabit(index: number) {
    this.habits.splice(index, 1);
  }
}
