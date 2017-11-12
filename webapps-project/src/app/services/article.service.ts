import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from '../../models/Article'
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  get articles(): Observable<Article[]>{
    return this.http.get("http://localhost:3000/articles").map(response =>
    response.json() )
  }
}
