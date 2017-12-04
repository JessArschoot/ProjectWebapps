import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './services/authentication.service';
import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user: string;
  constructor(private authService: AuthenticationService) {
    this.currentUser.subscribe(data => this.user = data);
    
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  ngOnInit() {
    
  }
  
  
}
