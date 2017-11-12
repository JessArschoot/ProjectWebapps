import { Article } from '../../models/Article';
import { ArticleService } from '../services/article.service';
import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private articles = [];

  constructor(private service: ArticleService) {
    this.service.articles.subscribe(data =>  this.articles = data)
    console.log(this.articles);
   }

  ngOnInit() {
  }


  addLike(): void
  // tslint:disable-next-line:one-line
  {
    //this.likes++;
  }
  makeComment(): void {
    $('.add-comment').show();
  }
}
