export class Posts {

    id:number | undefined
    title: string;
    date: Date;
    content: string;
    author: string
    constructor( title: string, content: string, author:string){
        this.title = title;
        this.date = new Date();
        this.content = content;
        this.author = author
    }



}
