import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user : Users = new Users('','','', new Date,'','','');

  alluser : Users[] = [];


  constructor(private usersSvc:UsersService) { }

  ngOnInit(): void {
    this.usersSvc.getAll().subscribe(alluser => this.alluser = alluser);
  }

  

}
