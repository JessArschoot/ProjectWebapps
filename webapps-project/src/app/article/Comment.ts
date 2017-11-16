export class Comment {
    _id: string;
    username: string;
    date: Date;
    text:string;

    constructor(name: string, date: Date, text: string){
        this.username = name;
        this.date = date;
        this.text = text;
    }
}