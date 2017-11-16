import { ArticleResolverService } from './article-resolver.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, FormBuilder,ReactiveFormsModule  } from '@angular/forms';

import { ArticleService } from './article.service';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'list/:id', component: ArticleDetailComponent, resolve: { article: ArticleResolverService}}
  
];

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  imports: [
    HttpModule,
    CommonModule,
   ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ArticleService,
    ArticleResolverService
  ],
})
export class ArticleModule { }
