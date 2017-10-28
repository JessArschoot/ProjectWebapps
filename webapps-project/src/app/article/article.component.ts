import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  name: String;
  title: String;
  text: String;
  picturePath: String;
  likes: number;

  comments: String;

  constructor() {
    this.name = 'Arne Deman';
    this.title = 'Liefde';
    this.text = 'Ik wil jullie allemaal laten weten dat ik mijn ventje dood graag zie! Love Jess Arschoot!';
    this.picturePath = '../../assets/images/IMG_2063.jpg';
    this.likes = 2013;
   }

  ngOnInit() {
  }


  addLike(): void
  // tslint:disable-next-line:one-line
  {
    this.likes++;
  }
  makeComment(): void {
    $('.add-comment').show();
  }
}
