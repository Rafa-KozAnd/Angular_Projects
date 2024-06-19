import { Component, OnInit } from '@angular/core';
import { PasswordService, PasswordEntry } from '../password.service';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.css']
})
export class PasswordManagerComponent implements OnInit {
  entries: PasswordEntry[] = [];
  newEntry: PasswordEntry = { name: '', password: '' };

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.loadPasswords();
  }

  loadPasswords() {
    this.entries = this.passwordService.getPasswords();
  }

  addPassword() {
    if (this.newEntry.name && this.newEntry.password) {
      this.passwordService.addPassword(this.newEntry);
      this.newEntry = { name: '', password: '' };
      this.loadPasswords();
    }
  }

  removePassword(index: number) {
    this.passwordService.removePassword(index);
    this.loadPasswords();
  }
}
