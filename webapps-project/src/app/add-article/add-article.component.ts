import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../models/Article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  private user: string;
  private _user: User;
  private article: FormGroup;
  @Output() event = new EventEmitter<Article>();
  @ViewChild('fileInput') fileInput;
  
  constructor(private fb: FormBuilder, private service: ArticleService, private userService: UserService) { 
    this.user = JSON.parse(localStorage.getItem('currentUser')).username;
  }

  ngOnInit() {
    this.userService.getUser(this.user).subscribe(data => {
      
                  this._user = new User(data.name, data.username, data.picture)
                });
      
              this.article = this.fb.group({
                title: ['', [Validators.required, Validators.minLength(2)]],
                text: ['', [Validators.required, Validators.minLength(20)]],
                nation: ['', [Validators.required]]
              });
  }

  addArticle(){
   

    let fileBrowser = this.fileInput.nativeElement;
    
  
    let f = fileBrowser.files[0];
   
    let r = new FileReader();
    r.readAsDataURL(f);
    r.onload= (e) => {
    var data = r.result.split(',')[1];
    var model = {
      username: this._user.username,
      userpic: this._user.picture,
      date: new Date(),
      nation: this.article.value.nation,
      title: this.article.value.title,
      text: this.article.value.text,
      picture: data,
      likes: 0,
      
    }
    this.service.addArticle(model).subscribe(data =>{
      this.event.emit(data);
    });
    //this._articles.push(new Article(this._user.username, this._user.picture, model.date, model.title, model.text, model.likes,[], model.picture));
    this.article.get("text").setValue("");
    this.article.get("title").setValue("");
    this.article.get('nation').setValue('');
    }
   
  }
}