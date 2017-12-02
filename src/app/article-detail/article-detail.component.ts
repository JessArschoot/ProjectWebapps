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
  private _comment: Boolean = false;
  private _like: Boolean = false;
  private _user: User;
  private user: string;
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private service: ArticleService, private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem('currentUser')).username;

      
     
     }
     

  ngOnInit() {
    this.userService.getUser(this.user).subscribe(data => {
                  this._user = new User(data.name, data.username, data.picture)
                });
    this.route.paramMap.subscribe(pa =>
      this.service.getArticle(pa.get('id'))
        .subscribe(item => {
          this._article = item;
          console.log(this._article);
          this._article.likes.forEach(item =>{
            console.log(item);
            if(item == this._user.username){
              this._like = true;
            }
            else{
              this._like = false;
            }
          });
        })
    );
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
      this.service.addLike(this._article._id, model).subscribe(data =>{
        this._article.likes.push(data.user);
        this._like = true;
      });
    }
    else{
      var model = {
        username: this._user.username,
      }
      this.service.removeLike(this._article._id, model).subscribe(data =>{
        this._article.likes.pop();
        this._like = false;
      });
    }
   
    console.log(this._article.likes);
  }
  makeComment(){
    if(this._comment == false)
    {
      this._comment = true;
      
        this.userService.getUser(this.user).subscribe(data =>{
          this._user = data;
          console.log(data);
          //var preview = document.getElementById('userPic');
          //console.log(preview);
         // var reader  = new FileReader();
          
          //reader.addEventListener("loadend", function () {
          //  preview.setAttribute('src', 'data: image/jpg;base64,'+data.picture);
            
          //}, true);
      
        });
       
      
    }
    else{
      this._comment = false;
    }
    
  }
  addComment(){
    var model = {
      name: this.user,
      userpic: this._user.picture,
      date: new Date(),
      text: this.comment.value.text,
    }
    this.service.addComment(this._article._id, model).subscribe(data => console.log(data));
    this._article.comments.push(new Comment(model.name,model.userpic, model.date, model.text));
    console.log(this._article.comments);
    this.comment.get("text").setValue("");
  }

}
