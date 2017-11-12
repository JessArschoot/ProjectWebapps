export class Article {
    name:string;
    date: Date;
    title:string;
    text:string;
    picture:string;
    likes: Number;
    comments:[string];

    constructor(name: string, date: Date, title: string, text: string, likes: number){
        this.name = name;
        this.date = date;
        this.title = title;
        this.text = text;
        this.likes = likes;

    }
}