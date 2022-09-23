export class Comments {

    id:number | undefined
    postid:number | undefined
    authorid: string;
    date: Date;
    content: string;
    constructor( authorid: string, postid:number | undefined, content: string,){
       
        this.postid = postid;
        this.authorid = authorid;
        this.date = new Date();
        this.content = content;
    }


}
