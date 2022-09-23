import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';
import { Chat } from '../models/chat';
import { Users } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authSvc:AuthService, private chatSvc:ChatService, private userSvc:UsersService) { }

  user:Users = this.authSvc.getLogged()
  chat:Chat[] = []
  newC:Chat = new Chat(this.user.username, '')
  onlineUsers:Users[]= []

  ngOnInit(): void {
    this.showChat()
  console.log(this.user)
  this.showOnline()
  }


GoToCreatePost(){
  this.router.navigate(['/createpost'])
}


showChat(){
 this.chatSvc.getAll().subscribe(res=>this.chat=res)
}

addC(){
  this.chatSvc.add(this.newC).subscribe(res=>{
    this.chat.push(res)
    this.newC = new Chat(this.user.username, '')

  })
}

showOnline(){
  this.userSvc.getAll().subscribe(res =>{this.onlineUsers=res
    console.log(this.onlineUsers)
    for(let ou of this.onlineUsers){
    let index = this.onlineUsers.findIndex(ou=> ou === ou)
  let yesOrnot:number = Math.floor(Math.random()*7)
  if(yesOrnot==1 || yesOrnot==2 || yesOrnot ==6){
    this.onlineUsers.splice(index,1)
    
  }
    
    }
    
})
this.onlineUsers=[]
}

}
