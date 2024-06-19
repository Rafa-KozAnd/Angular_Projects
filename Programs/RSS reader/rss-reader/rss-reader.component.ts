import { Component } from '@angular/core';
import { RssService } from '../rss.service';

@Component({
  selector: 'app-rss-reader',
  templateUrl: './rss-reader.component.html',
  styleUrls: ['./rss-reader.component.css']
})
export class RssReaderComponent {
  feedUrl: string = '';
  feed: any = null;

  constructor(private rssService: RssService) { }

  loadFeed() {
    if (this.feedUrl.trim()) {
      this.rssService.getFeed(this.feedUrl).subscribe(feed => {
        this.feed = feed;
      });
    }
  }
}
