import { Router } from '@angular/router';
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
  constructor(private service: ArticleService, private userService: UserService, private router: Router) {
    if(JSON.parse(localStorage.getItem('currentUser')))
    {
      this.user = JSON.parse(localStorage.getItem('currentUser')).username;
    }
    else{this.user = null;}
   }

  ngOnInit() {
    if(this.user != null){
        this.article.likes.forEach(item =>{
          if(item == this.user){
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
      this.userService.getUser(this.user).subscribe(data => {
        this._user = new User(data.name, data.username, data.picture)});
  }

  addLike(){
    if(this.user != null){
      if(this._like == false)
      {
        var model = {
          username: this._user.username,
        }
        this.service.addLike(this.article._id, model).subscribe(data =>{
          //this._article.likes.push(data.user);
          console.log(data);
        });
        this._like = true;
        this.article.likes.push(this._user.username);
      }
      else{
        var model = {
          username: this._user.username,
        }
        this.service.removeLike(this.article._id, model).subscribe(data =>{
          console.log(data);
        });
        this._like = false;
        this.article.likes.pop();
      }
     
      console.log(this.article.likes);
    }
    else{
      this.router.navigate(['/login']);
    }
   
  }
}
