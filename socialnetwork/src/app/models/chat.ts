export class Chat {
    id: number | undefined
    author: string
    content:string
    time: Date
    constructor(author:string, content:string){
        this.author = author
        this.content = content
        this.time = new Date()
    }
}
