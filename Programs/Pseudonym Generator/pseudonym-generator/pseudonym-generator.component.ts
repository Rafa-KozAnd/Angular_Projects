import { Component } from '@angular/core';
import { PseudonymService } from '../pseudonym.service';

@Component({
  selector: 'app-pseudonym-generator',
  templateUrl: './pseudonym-generator.component.html',
  styleUrls: ['./pseudonym-generator.component.css']
})
export class PseudonymGeneratorComponent {
  pseudonym: string | null = null;

  constructor(private pseudonymService: PseudonymService) { }

  generatePseudonym() {
    this.pseudonym = this.pseudonymService.generatePseudonym();
  }
}
