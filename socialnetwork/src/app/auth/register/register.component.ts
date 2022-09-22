import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  registeringUser = new Users(this.form.value.username, '', '', new Date, this.form.value.email, this.form.value.password, '')

  constructor( private userSvc: UsersService, private router: Router, private auth:AuthService ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  // signUp(){
  //   this.userSvc.add(this.form.value).subscribe(res => {
  //     this.form.reset()
  //     this.router.navigate([''])
  //   })
  // }

  signUp(){
    this.auth.register(this.registeringUser)
    .subscribe(authentication => {
      this.auth.saveAuthToLocal(authentication)
      this.router.navigate(['/dashboard'])
    })
  }
}
