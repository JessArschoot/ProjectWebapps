import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from '../models/Article'
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  constructor(private http: Http, private auth: AuthenticationService) { }

  get articles(): Observable<Article[]>{
    return this.http.get("https://webapps-backend-jess.herokuapp.com/articles").map(response =>
    response.json() )
  }

  getArticle(id): Observable<Article>{
    console.log(id);
    return this.http.get("https://webapps-backend-jess.herokuapp.com/article/"+id,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
    response.json() )
  }

  addComment(id: string, model: any){
    return this.http.post("https://webapps-backend-jess.herokuapp.com/article/add-comment/"+id,model,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`})}).map((response: Response) => response.json());
    
  }
  addArticle(model: any){
    return this.http.post("https://webapps-backend-jess.herokuapp.com/article/add-article/",model,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`})}).map((response: Response) => response.json());
    
  }
}
