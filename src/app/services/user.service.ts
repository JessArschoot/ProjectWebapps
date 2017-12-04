import { Observable } from 'rxjs/Rx';
import { Http, Response , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/User';

@Injectable()
export class UserService {

  constructor(private http: Http, private auth: AuthenticationService) { }
  getUser(name): Observable<User> {
    return this.http.get("/API/users/user/"+name,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
    response.json() )
  }

}
