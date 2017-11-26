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
  private article: FormGroup;
  private user: string;
  private _user: User;

    constructor(private fb: FormBuilder, private service: ArticleService, private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem('currentUser')).username;
      
    }
  
    ngOnInit() {
        this.service.articles
          .subscribe(items =>{ this._articles = items, console.log(items)});

          this.userService.getUser(this.user).subscribe(data => {

            this._user = new User(data.name, data.username, data.picture)
          });

        this.article = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(2)]],
          text: ['', [Validators.required, Validators.minLength(20)]],
        });
    }
    get articles() {
      return this._articles;
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
        title: this.article.value.title,
        text: this.article.value.text,
        picture: data,
        likes: 0,
        
      }
      this.service.addArticle(model).subscribe(data => console.log(data));
      this._articles.push(new Article(this._user.username, this._user.picture, model.date, model.title, model.text, model.likes,[], model.picture));
      this.article.get("text").setValue("");
      this.article.get("title").setValue("");
      }
     
    }
}
