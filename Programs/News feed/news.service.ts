import { Injectable } from '@angular/core';

export interface NewsItem {
  title: string;
  content: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: NewsItem[] = [
    {
      title: 'Notícia 1',
      content: 'Conteúdo da notícia 1.',
      date: '2023-06-19'
    },
    {
      title: 'Notícia 2',
      content: 'Conteúdo da notícia 2.',
      date: '2023-06-18'
    },
    {
      title: 'Notícia 3',
      content: 'Conteúdo da notícia 3.',
      date: '2023-06-17'
    }
  ];

  getNews(): NewsItem[] {
    return this.news;
  }
}
