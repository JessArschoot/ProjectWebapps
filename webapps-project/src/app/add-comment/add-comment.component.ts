import { hidden } from '@angular-devkit/core/src/terminal';
import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideUp(): void {
    $('.addComment').hide();
  }
}
