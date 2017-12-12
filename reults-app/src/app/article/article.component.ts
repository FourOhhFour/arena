import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  inputs: ['article'],
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any;

  constructor() { }

  ngOnInit() {
  }

}
