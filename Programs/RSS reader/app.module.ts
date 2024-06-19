import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RssReaderComponent } from './rss-reader/rss-reader.component';
import { RssService } from './rss.service';

@NgModule({
  declarations: [
    AppComponent,
    RssReaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RssService],
  bootstrap: [AppComponent]
})
export class AppModule { }
