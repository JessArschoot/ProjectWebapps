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
  public articles: Article[];

  constructor(private service: UserService) {
      this._user = JSON.parse(localStorage.getItem('currentUser')).username;
   }

  ngOnInit() {
    this.service.getUser(this._user)
    .subscribe(data =>  this.user = new User(data.name, data.username, data.picture));

    this.service.getFavorites(this._user).subscribe(data => this.articles = data);
  }

}
