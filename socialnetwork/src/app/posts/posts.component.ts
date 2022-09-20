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

 
  posts:Posts [] = [];
  

  constructor(private postsSvc:PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsSvc.getAll().subscribe(posts => this.posts = posts)
  }

 

}
