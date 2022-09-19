export class Comments {

    id:number | undefined
    author: string;
    date: Date;
    content: string;
    constructor( author: string, content: string,){
       
        this.author = author;
        this.date = new Date();
        this.content = content;
    }


}
