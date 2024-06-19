import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PseudonymGeneratorComponent } from './pseudonym-generator/pseudonym-generator.component';
import { PseudonymService } from './pseudonym.service';

@NgModule({
  declarations: [
    AppComponent,
    PseudonymGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PseudonymService],
  bootstrap: [AppComponent]
})
export class AppModule { }
