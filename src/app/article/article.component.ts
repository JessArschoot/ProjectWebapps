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
  user: string;
  _like: Boolean= false;
  constructor(private service: ArticleService, private userService: UserService) {
    if(JSON.parse(localStorage.getItem('currentUser')))
    {
      this.user = JSON.parse(localStorage.getItem('currentUser')).username;
    }
    else{this.user = null;}
   }

  ngOnInit() {
    if(this.user != null){
      console.log('hij is hier');
      this.userService.getUser(this.user).subscribe(data => {
        this._user = new User(data.name, data.username, data.picture)
        if(this._user != null){
        this.article.likes.forEach(item =>{
          if(item == this._user.username){
            this._like = true;
          }
          else{
            this._like = false;
          }
        });
      }
      else{
        this._like = false;
      }
      });
    }
  }
}
