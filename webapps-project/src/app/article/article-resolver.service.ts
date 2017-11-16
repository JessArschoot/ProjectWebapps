import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Article } from './Article';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleResolverService implements Resolve<Article> { 
  constructor(private service: ArticleService) {}
 
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Article> {
            console.log(route.params['id']);
    return this.service.getArticle(route.params['id']);
  }

}
