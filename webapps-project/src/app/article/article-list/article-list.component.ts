import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  private _articles: Article[];
  
    constructor(private service: ArticleService) {
      
    }
  
    ngOnInit() {
      this.service.articles
        .subscribe(items => this._articles = items);
    }
    get articles() {
      return this._articles;
    }
}
