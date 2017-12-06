import {Comment} from './Comment';
import { User } from './User';
export class Article {
    _id: string;
    user:User
    nation: string
    date: Date;
    title:string;
    text:string;
    picture:string;
    likes: string[];
    comments:Comment[];

    constructor(user: User,nation:string, date: Date, title: string, text: string, likes: string[], comments: Comment[], picture:string){
        this.user = user;
        this.nation = nation;
        this.date = date;
        this.title = title;
        this.text = text;
        this.likes = likes;
        this.comments = comments;
        this.picture = picture;

    }
}