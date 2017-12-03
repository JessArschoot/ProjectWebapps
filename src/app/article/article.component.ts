import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() public article: Article
  _user: User;
  _like: Boolean;
  constructor(private service: ArticleService, private userService: UserService) {
   }

  ngOnInit() {
    this.userService.getUser(JSON.parse(localStorage.getItem('currentUser')).username).subscribe(data => {
      this._user = new User(data.name, data.username, data.picture)
    });
    this.article.likes.forEach(item =>{
      console.log(item);
      if(item == this._user.username){
        this._like = true;
      }
      else{
        this._like = false;
      }
    });
  }

}
