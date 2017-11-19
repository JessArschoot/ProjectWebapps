import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleComponent} from '../article/article.component';
import { ArticleService } from '../services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  private _articles: Article[];
  private article: FormGroup;
  private user: string;
    constructor(private fb: FormBuilder, private service: ArticleService) {
      this.user = JSON.parse(localStorage.getItem('currentUser')).username;
    }
  
    ngOnInit() {
      this.service.articles
        .subscribe(items => this._articles = items);

        this.article = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(2)]],
          text: ['', [Validators.required, Validators.minLength(20)]],
        });
    }
    get articles() {
      return this._articles;
    }
    addArticle(){
      var model = {
        title: this.article.value.title,
        name: this.user,
        date: new Date(),
        text: this.article.value.text,
      }
      this.service.addArticle(model).subscribe(data => console.log(data));
      this._articles.push(new Article(model.name, model.date, model.title, model.text, Number(), []));
      this.article.get("text").setValue("");
      this.article.get("title").setValue("");
    }
}
