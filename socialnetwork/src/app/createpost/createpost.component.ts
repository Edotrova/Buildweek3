import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Posts } from '../models/posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {

  form!:FormGroup

  post: Posts = new Posts('', '');
  posts:Posts [] = [];
 

  constructor(private postsSvc:PostsService, private router: Router, private auth:AuthService) { }

  ngOnInit(): void {

    this.postsSvc.getAll().subscribe(posts => this.posts = posts);
    this.form = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
      
    })
   
  }



  savePost(){
    this.postsSvc.add(this.post).subscribe(res => {
      this.posts.push(res)
      this.post = new Posts('','')
    })
  }
Back(){
 
  this.router.navigate(['/dashboard'])

}

 }
