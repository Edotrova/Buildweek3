export class Posts {

    id:number | undefined
    title: string;
   
    date: Date;
    content: string;
    constructor( title: string, content: string,){
       
        this.title = title;
        this.date = new Date();
        this.content = content;
    }



}
