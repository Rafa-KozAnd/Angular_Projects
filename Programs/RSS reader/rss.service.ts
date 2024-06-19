import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(private http: HttpClient) { }

  getFeed(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(response => {
        let feed: any;
        parseString(response, { trim: true }, (err, result) => {
          feed = result;
        });
        return feed;
      })
    );
  }
}
