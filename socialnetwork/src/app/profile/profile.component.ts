import { Component, OnInit } from '@angular/core';
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

  user:Users = this.authSvc.getLogged()
  mines: Posts[] = []

  ngOnInit(): void {
    
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
    this.postSvc.getAll().subscribe(posts => {
      let obj = posts.filter(post=> post.author == this.user.username)
      this.mines = obj})
  }

  edit(){

  }


}
