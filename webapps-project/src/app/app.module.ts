import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // RouterModule.forRoot{[
       // {'', component: RankingComponent},
    // ]},
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
