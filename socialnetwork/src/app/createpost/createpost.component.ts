import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Posts } from '../models/posts';
import { Users } from '../models/users';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {

  form!:FormGroup



  constructor(private postsSvc:PostsService, private router: Router, private auth:AuthService) { }

  user:Users = this.auth.getLogged();
  post: Posts = new Posts('', this.user.username, '');
  posts:Posts [] = [];
 

  

 

  ngOnInit(): void {

    this.postsSvc.getAll().subscribe(posts => this.posts = posts);
    
   
  }



  savePost(){
    this.postsSvc.add(this.post).subscribe(res => {
      this.posts.push(res)
      this.post = new Posts('','','')
      console.log(this.user.username);
    })
  }
Back(){
 
  this.router.navigate(['/dashboard'])

}

 }
