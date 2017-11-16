import {Comment} from './Comment';
export class Article {
    _id: string;
    name:string;
    date: Date;
    title:string;
    text:string;
    picture:string;
    likes: number;
    comments:Comment[];

    constructor(name: string, date: Date, title: string, text: string, likes: number, comments: Comment[]){
        this.name = name;
        this.date = date;
        this.title = title;
        this.text = text;
        this.likes = likes;
        this.comments = comments;

    }
}