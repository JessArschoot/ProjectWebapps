import { User } from "./User";

export class Comment {
    _id: string;
    user: User;
    date: Date;
    text:string;

    constructor(user: User, date: Date, text: string){
        this.user = user;
        this.date = date;
        this.text = text;
    }
}