import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Posts } from '../models/posts';
import { Users } from '../models/users';
import { PostsService } from '../posts.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(private authSvc:AuthService, private usersSvc:UsersService, private router:Router, private postSvc:PostsService) { }

  form!:FormGroup
  user:Users = this.authSvc.getLogged()
  mines: Posts[] = []

  ngOnInit(): void {
    
    this.showingMine()

    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })

  }

  delete(){
    
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your profile has been deleted.',
            'success'
          )
          this.usersSvc.delete(this.user.id).subscribe(res=>{
          this.router.navigate([''])
          this.authSvc.logOut()
          
        })
      }
    })
  }

   showingMine():void{
    //  this.postSvc.getAll().subscribe(posts => {
    //    let obj = posts.filter(post=> post.author == this.user.username)
    //   this.mines = obj})
    console.log(this.user.username)
    this.postSvc.getPostByAuthor(this.user.username).subscribe(res=>this.mines=res)
   }

  edit(){

  }

  deletePost(id:number | undefined){
    this.postSvc.delete(id).subscribe(res=>{
      let index = this.mines.findIndex(m => m.id === id)
      this.mines.splice(index,1)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You just deleted your post!',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }


}
