import { Injectable } from '@angular/core';

export interface PasswordEntry {
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private storageKey = 'passwordManager';

  getPasswords(): PasswordEntry[] {
    const storedPasswords = localStorage.getItem(this.storageKey);
    return storedPasswords ? JSON.parse(storedPasswords) : [];
  }

  addPassword(entry: PasswordEntry) {
    const passwords = this.getPasswords();
    passwords.push(entry);
    localStorage.setItem(this.storageKey, JSON.stringify(passwords));
  }

  removePassword(index: number) {
    const passwords = this.getPasswords();
    passwords.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(passwords));
  }
}
