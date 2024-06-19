import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PseudonymService {
  private firstNames = [
    'Shadow', 'Mystic', 'Echo', 'Blaze', 'Nova', 'Vortex', 'Falcon', 'Phoenix', 'Rogue', 'Jade'
  ];
  private lastNames = [
    'Whisper', 'Storm', 'Rider', 'Knight', 'Hunter', 'Ghost', 'Shade', 'Fury', 'Strike', 'Frost'
  ];

  generatePseudonym(): string {
    const firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
    return `${firstName} ${lastName}`;
  }
}
