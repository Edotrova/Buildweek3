import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../models/posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  post: Posts = new Posts('','');
  posts:Posts [] = [];
  

  constructor(private postsSvc:PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsSvc.getAll().subscribe(posts => this.posts = posts)
  }

 

  // editPost(){
  //   this.postsSvc.edit(this.post).subscribe(res => {
  //     let index = this.posts.findIndex(p => p.id === this.post.id)
  //     this.posts.splice(index,1, this.post)
  //     this.formAction = 'create'
  //   })
  // }

  deletePost(post:Posts){
    this.postsSvc.delete(post.id).subscribe(res => {
      let index = this.posts.findIndex(p => p.id === post.id)
      this.posts.splice(index,1)
    })
  }

}
