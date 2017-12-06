import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AuthenticationService } from './services/authentication.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core'; 

import { ArticleFilterPipe } from '../app/shared/article-filter-pipe';

import { AppComponent } from './app.component';
import { ArticleResolverService } from './services/article-resolver.service';
import { ArticleService } from './services/article.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { UserService} from './services/user.service';
import { AddArticleComponent } from './add-article/add-article.component';
import { UserComponent } from './user/user.component';

//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  
   { path: "article/list/:id", component: ArticleDetailComponent, canActivate: [ AuthGuardService ] , resolve: { article: ArticleResolverService}},
   { path: "article/list", component: ArticleListComponent},
   { path: "login", component: LoginComponent},
   { path: "register", component: RegisterComponent},
   { path: "user", component: UserComponent, canActivate: [ AuthGuardService ]},
   { path: "logout", component: LogoutComponent,canActivate: [ AuthGuardService ], redirectTo:'article/list'},
   { path: "**", redirectTo:'article/list' }
 
 ];
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ArticleListComponent,
    AddArticleComponent,
    UserComponent,
    ArticleFilterPipe
    //PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleResolverService, ArticleService,
  AuthGuardService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
