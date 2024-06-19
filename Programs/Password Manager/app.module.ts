import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordManagerComponent } from './password-manager/password-manager.component';
import { PasswordService } from './password.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
