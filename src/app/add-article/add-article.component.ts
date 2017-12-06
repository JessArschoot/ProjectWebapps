
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl  } from '@angular/forms';
import { Article } from '../models/Article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  private user: string;
  private _user: User;
  public article: FormGroup;
  public nations: string[];
  public addA: Boolean = false;
  @Output() _nations = new EventEmitter<string>();
  @Output() event = new EventEmitter<Article>();
  @ViewChild('fileInput') fileInput;

  constructor(private fb: FormBuilder, private service: ArticleService, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('currentUser')).username;

  }

  ngOnInit() {
    this.nations = ['Frankrijk', 'Spanje', 'Italië', 'Amerika', 'België', 'Duitsland'];
    this.userService.getUser(this.user).subscribe(data => {

      this._user = new User(data.name, data.username, data.picture)
    });

    this.article = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      text: ['', [Validators.required, Validators.minLength(5)]],
      nation: ['Frankrijk', [Validators.required]]
    });
  }

  add() {
    if (this.addA) {
      this.addA = false
    }
    else {
      this.addA = true;
    }
  }
  addArticle() {
    console.log(this.article.value.nation);
    if(this.fileInput.nativeElement.files.length != 0){
      let fileBrowser = this.fileInput.nativeElement;
      let f = fileBrowser.files[0];
      let r = new FileReader();
      r.readAsDataURL(f);
      r.onload = (e) => {
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
        this.service.addArticle(model).subscribe(data => {
          this.event.emit(data);
        });
        //this._articles.push(new Article(this._user.username, this._user.picture, model.date, model.title, model.text, model.likes,[], model.picture));
       this.article.reset();
      }
  
    }
    else
    {
      alert("foto is verplicht");
    }

  }
}
