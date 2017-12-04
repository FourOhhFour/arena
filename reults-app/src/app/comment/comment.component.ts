import { Component, OnInit } from '@angular/core';
import { IChatItem } from '../IChatItem';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  inputs: ['comment'],
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: IChatItem;

  constructor() { }

  ngOnInit() {
  }

}
