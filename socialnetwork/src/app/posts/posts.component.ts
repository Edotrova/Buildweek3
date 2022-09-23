import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

import { CommentsService } from '../comments.service';
import { Comments } from '../models/comments';
import { Posts } from '../models/posts';
import { Users } from '../models/users';
import { PostsService } from '../posts.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  isVisible = false;

  i:number = 0;
  control : boolean = true;

  posts:Posts [] = [];
  comments:Comments [] = []
  newcomment: Comments = new Comments('',Number(),'');
  
  constructor(private postsSvc:PostsService, private router: Router, private commentsSvc: CommentsService, private auth:AuthService) { }

  userLogged:Users = this.auth.getLogged()

  ngOnInit(): void {
    this.commentsSvc.getAll().subscribe(comments => {
      this.postsSvc.getAll().subscribe(posts => {
     posts =  posts.map(p => {
          let postcomments = comments.filter(comment => comment.postid == p.id)
          p.comments=postcomments
          return p
        })
       this.posts = posts});
      
    })
    
  }
    

  saveComment(post:Posts){
    this.newcomment = new Comments(this.userLogged.username, post.id, '' )
    this.commentsSvc.add(this.newcomment).subscribe(res => {
      post.comments.push(res)
      this.newcomment = Object.assign({}, new Comments('', Number(),''))
      this.isVisible = false
      
    })

  }

clickVisible():void{
  console.log(this.isVisible)
  if(this.isVisible==false){  this.isVisible = true;} else{this.isVisible=false}

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



}
