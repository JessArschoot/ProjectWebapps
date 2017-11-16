import { Injectable } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from './Article'
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  constructor(private http: Http, private auth: AuthenticationService) { }

  get articles(): Observable<Article[]>{
    return this.http.get("http://localhost:3000/articles",{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
    response.json() )
  }

  getArticle(id): Observable<Article>{
    console.log(id);
    return this.http.get("http://localhost:3000/article/"+id,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
    response.json() )
  }

  addComment(id: string, model: any){
    return this.http.post("http://localhost:3000/article/add-comment/"+id,model,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`})}).map((response: Response) => response.json());
    
  }
}
