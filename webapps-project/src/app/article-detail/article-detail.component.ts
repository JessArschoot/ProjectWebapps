import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { Comment } from '../models/Comment';

import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  private _article: Article;
  private comment: FormGroup;
  private _comment: Boolean = false;
  private _like: Boolean = false;
  private user: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private service: ArticleService) {
      this.user = JSON.parse(localStorage.getItem('currentUser')).username;
     
     }

  ngOnInit() {
    this.route.paramMap.subscribe(pa =>
      this.service.getArticle(pa.get('id'))
        .subscribe(item => {
          this._article = item;
          console.log(this._article);
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
      this._article.likes++;
      this._like = true;
    }
    else{
      this._article.likes--;
      this._like = false;
    }
   
    console.log(this._article.likes);
  }
  makeComment(){
    if(this._comment == false)
    {
      this._comment = true;
    }
    else{
      this._comment = false;
    }
    
  }
  addComment(){
    var model = {
      name: this.user,
      date: new Date(),
      text: this.comment.value.text,
    }
    this.service.addComment(this._article._id, model).subscribe(data => console.log(data));
    this._article.comments.push(new Comment(model.name, model.date, model.text));
    console.log(this._article.comments);
    this.comment.get("text").setValue("");
  }

}
