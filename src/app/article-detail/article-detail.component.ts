import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { Comment } from '../models/Comment';

import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  public _article: Article;
  private comment: FormGroup;
  private _like: Boolean = false;
  private _user: User;
  private _userArticle: User;
  private user: string;
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private service: ArticleService, private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem('currentUser')).username;

      
     
     }
     

  ngOnInit() {
    this.userService.getUser(this.user).subscribe(data => {
                  this._user = new User(data.name, data.username, data.picture)   
    this.route.paramMap.subscribe(pa =>
      this.service.getArticle(pa.get('id'))
        .subscribe(item => {
          this._article = item;
          
          this._article.likes.forEach(item =>{
            
            if(item == this._user.username){
              this._like = true;
            }
            else{
              this._like = false;
            }
          });
        })
    );
  });
    this.comment = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(2)]],
      
    });
   // console.log(this._article.comments.length);
  }

  get getcomment(): FormArray {
    return <FormArray>this.comment.get('text');
  }
  addLike(){
    if(this._like == false)
    {
      var model = {
        username: this._user.username,
      }
      this.service.addLike(this._article._id, model).subscribe();
      this._like = true;
      this._article.likes.push(this._user.username);
    }
    else{
      var model = {
        username: this._user.username,
      }
      this.service.removeLike(this._article._id, model).subscribe();
      this._like = false;
      this._article.likes.pop();
    }
   
  
  }
  addComment(){
    var model = {
      user: this._user,
      date: new Date(),
      text: this.comment.value.text,
    }
    this.service.addComment(this._article._id, model).subscribe(data=> this._article.comments.push(data));
    ;
    this.comment.reset();
  }
  removeComment(comment: Comment){
  
    var model= {
      id: this._article._id
    }
    this.service.removeComment(comment._id,model).subscribe();
    this._article.comments.splice(this._article.comments.indexOf(comment),1 );
  
 
  }

}
