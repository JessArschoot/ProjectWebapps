import { User } from '../models/User';
import { take } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleComponent} from '../article/article.component';
import { ArticleService } from '../services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  private _articles: Article[];
  public user: string;
  public _user: User;
  public _nations: string[];
  filter: Article = new Article("", "", "",new Date(),"","",0,[],"");
 
    constructor(private fb: FormBuilder, private service: ArticleService, private userService: UserService) {
        let jsonUser = JSON.parse(localStorage.getItem('currentUser'))
        this.user = jsonUser? jsonUser.username:null;
      
      
    }
  
    ngOnInit() {
        this.service.articles
          .subscribe(items =>{ this._articles = items, console.log(items)});

          
    }
    addArticle(article: Article){
        this._articles.push(article);
    }
    setNations(nations: string[]){
        this._nations = nations;
    }
    get articles() {
      return this._articles;
    }
    
   
}
