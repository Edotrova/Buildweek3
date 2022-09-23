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
  userEdit = true
  postEdit = true
  editedUser : Users = new Users('','','', new Date,'','','')
  editedPost : Posts = new Posts('','','')
  userLogged:boolean = this.authSvc.isUserLogged()
  isVisible = false;

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
        text: "You won't be able to have your ACCOUNT back!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your profile has just been deleted forever!',
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
    console.log(this.user.birthdate)
    this.postSvc.getPostByAuthor(this.user.username).subscribe(res=>this.mines=res)
   }

   editUser(){
    
    this.usersSvc.edit(this.editedUser, this.editedUser.id).subscribe(() =>{ 
      this.authSvc.logOut()
      if(this.userLogged == true){
      this.authSvc.login(this.editedUser).subscribe(res=>this.authSvc.saveAuthToLocal(res))
      }else {
        this.authSvc.login(this.editedUser).subscribe(res=>this.authSvc.saveAuthToSession(res))
      }
      this.user = this.authSvc.getLogged()
      })
      
        this.userEdit = true}

   edit(editedUser:Users){
    this.userEdit = false
    this.editedUser = Object.assign({},editedUser)
  }
  

  deletePost(id:number | undefined){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to get back your POST!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Exit',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your post has just been deleted forever!',
          'success'
        )
    this.postSvc.delete(id).subscribe(res=>{
      let index = this.mines.findIndex(m => m.id === id)
      this.mines.splice(index,1)
    })
  }
})
}


  editP(editedPost:Posts){
       this.postEdit = false
       this.editedPost = Object.assign({},editedPost)
     }

     editPost(){
      this.postSvc.edit(this.editedPost, this.editedPost.id).subscribe(res => {
        let index = this.mines.findIndex(m => m.id === this.editedPost.id)
        this.mines.splice(index,1, this.editedPost)
        this.editedPost = new Posts('','', '')
        this.postEdit = true
      })
    }

    clickpostVisible():void{
      if(this.isVisible === true){
        this.isVisible = false;
       
      }
      else {
        this.isVisible = true }
      
    }
     
}
