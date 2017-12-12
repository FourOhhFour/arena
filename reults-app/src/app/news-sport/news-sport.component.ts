import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-news-sport',
  templateUrl: './news-sport.component.html',
  inputs: ['sport'],
  styleUrls: ['./news-sport.component.css']
})
export class NewsSportComponent implements OnInit {

  sport: string;
  articles: any[];
  show: boolean = false;

  constructor(public http: Http) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'sources=' + this.sport + '-news&' +
    'apiKey=2874034a217c499c92e45fddbc5dbc28';

    var req = new Request(url);

    this.http.get(url).map(res => res.json())
    .subscribe(
        data => {
            this.articles = data.articles;
        });
  }

  changeShow(){
    this.show = !this.show;
  }

}
