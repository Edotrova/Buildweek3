export class Posts {

    id:number | undefined
    title: string;
     author:string 
    date: Date;
    content: string;
    constructor( title: string, author:string, content: string,){
       
        this.title = title;
        this.date = new Date();
        this.author = author
        this.content = content;
        this.author = author
    }



}
