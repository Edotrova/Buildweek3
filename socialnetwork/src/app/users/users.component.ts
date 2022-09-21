import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // userCard : Users = new Users('','','', new Date,'','','' )
  userCard : Users[] = []
  userSeen : Users = new Users ('','','', new Date,'','','' )
  alluser : Users[] = [];
  formInfoUsers = true
  searchVal: string = ''
  



  constructor(private usersSvc:UsersService) { }

  ngOnInit(): void {
    this.usersSvc.getAll().subscribe(alluser => this.alluser = alluser);
  }

  showUser(id:number | undefined){
    
    this.usersSvc.getUserById(id).subscribe(res=>{this.userCard=res
    console.log(this.userCard)
    this.userSeen = this.userCard[0]
    console.log(this.userSeen)
    })
    
    this.formInfoUsers=false
  }

  checkSearchVal() {
    this.alluser.slice();
    const filteredUsers: Users[] = [];
    if (this.searchVal && this.searchVal !== '') {
      for (const selectedUser of this.alluser) {
        if (selectedUser.username.toLowerCase().search(this.searchVal.toLowerCase()) !== -1 ||
          selectedUser.name.toLowerCase().search(this.searchVal.toLowerCase()) !== -1) {
          filteredUsers.push(selectedUser);
        }
      }
      this.alluser = filteredUsers.slice();
    }


}
}