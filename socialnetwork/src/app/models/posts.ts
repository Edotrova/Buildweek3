export class Posts {

    id:number | undefined
    title: string;
<<<<<<< HEAD
    date: Date;
    content: string;
    author: string
    constructor( title: string, content: string, author:string){
=======
     author?:string 
    date: Date;
    content: string;
    constructor( title: string, author:string, content: string,){
       
>>>>>>> e5044fffe9c694c1b2f2f4182bfce3e31b5dbcd6
        this.title = title;
        this.date = new Date();
        this.author = author
        this.content = content;
        this.author = author
    }



}
