import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
 

  constructor(private postsSvc:PostsService, private router: Router) { }

  ngOnInit(): void {
   
  }

  save(){
    this.postsSvc.add(this.post).subscribe(res => {
      this.posts.push(res)
      this.post = new Posts('','')
  }

)}
 }
