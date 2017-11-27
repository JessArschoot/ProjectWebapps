import {Comment} from './Comment';
import { User } from './User';
export class Article {
    _id: string;
    username:string;
    userpic: string;
    nation: string
    date: Date;
    title:string;
    text:string;
    
    picture:string;
    likes: number;
    comments:Comment[];

    constructor(username: string, userpic:string,nation:string, date: Date, title: string, text: string, likes: number, comments: Comment[], picture:string){
        this.username = username;
        this.userpic = userpic;
        this.nation = nation;
        this.date = date;
        this.title = title;
        this.text = text;
        this.likes = likes;
        this.comments = comments;
        this.picture = picture;

    }
}