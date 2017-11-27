export class Comment {
    _id: string;
    username: string;
    userpic: string;
    date: Date;
    text:string;

    constructor(name: string,userpic:string, date: Date, text: string){
        this.username = name;
        this.userpic= userpic;
        this.date = date;
        this.text = text;
    }
}