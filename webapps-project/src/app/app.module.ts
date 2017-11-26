import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AuthenticationService } from './services/authentication.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleResolverService } from './services/article-resolver.service';
import { ArticleService } from './services/article.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { UserService} from './services/user.service';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  
   { path: "article/list/:id", component: ArticleDetailComponent, canActivate: [ AuthGuardService ] , resolve: { article: ArticleResolverService}},
   { path: "article/list", component: ArticleListComponent},
   { path: "login", component: LoginComponent},
   { path: "register", component: RegisterComponent},
   { path: "logout", component: LogoutComponent},
   { path: "**", component: ArticleListComponent }
 
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
