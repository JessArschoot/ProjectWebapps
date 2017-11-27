import { forEach } from '@angular-devkit/schematics/src';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private user: User;
  private _user: string;
  private articles: Article[];

  constructor(private service: UserService, private articleService: ArticleService) {
      //this._user = JSON.parse(localStorage.getItem('currentuser')).username;
   }

  ngOnInit() {
    this.service.getUser(this._user)
    .subscribe(data =>  this.user = new User(data.name, data.username, data.picture));

    console.log(this.user);
    this.articleService.articles.subscribe(data => data.forEach(d => {
      if(d.username == this.user.username){
        this.articles.push(d);
      }
    }));
  }

}
