export class Comments {

    id:number | undefined
    postid:string 
    authorid: string;
    date: Date;
    content: string;
    constructor( authorid: string, postid:string, content: string,){
       
        this.postid = postid;
        this.authorid = authorid;
        this.date = new Date();
        this.content = content;
    }


}
