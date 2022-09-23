import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { CommentsService } from '../comments.service';
import { Comments } from '../models/comments';
import { Posts } from '../models/posts';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  isVisible = false;
  nascondi = true;
  i:number = 0;
  control : boolean = true;

  posts:Posts [] = [];
  comments:Comments [] = []
  newcomment: Comments = new Comments('','','');
  
  constructor(private postsSvc:PostsService, private router: Router, private commentsSvc: CommentsService) { }

  ngOnInit(): void {
    this.commentsSvc.getAll().subscribe(comments => {
      this.postsSvc.getAll().subscribe(posts => {
     posts =  posts.map(p => {
          let postcomments = comments.filter(comment => comment.postid == String(p.id))
          p.comments=postcomments
          return p
        })
       this.posts = posts});
      
    })
    
  }
    

  saveComment(post:Posts){
    
    this.commentsSvc.add(this.newcomment).subscribe(res => {
      post.comments.push(res)
      this.newcomment = Object.assign({}, new Comments('','',''))
      this.isVisible = false
      
    })
  }
 


   



    


clickVisible():void{
  this.isVisible = true;
}
 


  like() : number{
    if(this.control === true){
  this.i++ 
  this.control = false;
  console.log(this.i)
  return this.i
 

}
else {
  this.i --
  this.control = true;
  console.log(this.i)
  return this.i
  

}


}

mostraCommenti(){
  if(this.nascondi === true){
    this.nascondi = false;
   
  }
  else {
    this.nascondi = true }
  
  
  }



}


